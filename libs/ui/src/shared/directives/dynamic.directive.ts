import {
    ChangeDetectorRef,
    Compiler,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Input,
    ModuleWithComponentFactories,
    NgModule,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    Type,
    ViewContainerRef
} from '@angular/core';

import _ from 'lodash';
import {CommonModule} from "@angular/common";


@Directive({
    selector: '[dynamic]'
})
export class DynamicDirective implements OnInit, OnDestroy, OnChanges {
    @Input() template: string = null;
    @Input() components: any = null;
    @Input() selector: string = null;
    @Input() properties: any;
    @Input() events: any;
    compRef: ComponentRef<any>;


    constructor(
        private resolver: ComponentFactoryResolver,
        private vcRef: ViewContainerRef,
        private compiler: Compiler
    ) {
    }

    ngOnInit(): void {

        if (this.template) {
            this.createTemplate()
        }
        if (this.selector) {
            this.createComponent();
        }
    }

    ngOnChanges() {
        if (this.compRef) {
            this.updateContext()
        }
    }

    ngOnDestroy() {
        this.compRef.destroy();
    }

    ///-----------------------------------------------  Template   -----------------------------------------------///


    createTemplate = () => {
        const component = this.createTemplateComponent(this.template);
        const module = this.createTemplateModule(component);

        this.compiler.compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
                const compFactory = moduleWithFactories.componentFactories.find(x => x.componentType === component);
                this.compRef = this.vcRef.createComponent(compFactory);
                this.initContext();
            })
            .catch(error => {
                console.log(error);
            });

    };

    private createTemplateComponent = (template: string) => {
        @Component({
            selector: 'dynamic-template',
            template: template
        })
        class TemplateComponent implements OnInit, OnChanges {
            constructor(private cd: ChangeDetectorRef) {
            }

            ngOnInit() {
                this.cd.markForCheck()
            }

            ngOnChanges(changes: SimpleChanges): void {
            }
        }

        return TemplateComponent;
    };

    private createTemplateModule = (component: Type<any>) => {
        @NgModule({
            imports: [CommonModule],
            declarations: [component]
        })
        class TemplateModule {
        }

        return TemplateModule;
    };


    ///-----------------------------------------------  Component   -----------------------------------------------///

    createComponent = () => {
        const component = this.components[this.selector];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.compRef = this.vcRef.createComponent(factory);
        this.initContext();
    };

    ///-----------------------------------------------  Context   -----------------------------------------------///


    private initContext = () => {
        this.parseContext()

        if (typeof this.compRef.instance.ngOnInit === 'function') {
            this.compRef.instance.ngOnInit()
        } else {
            throw new Error(`${this.compRef.componentType.name} doesn't implement 'ngOnInit'`);
        }
    }

    private updateContext = () => {
        this.parseContext()
        if (typeof this.compRef.instance.ngOnChanges === 'function') {
            this.compRef.instance.ngOnChanges()
        } else {
            throw new Error(`${this.compRef.componentType.name} doesn't implement 'ngOnChanges'`);
        }

    };

    private parseContext = () => {
        _.forOwn(this.properties, (value, key) => {
            if (value !== undefined) this.compRef.instance[key] = value;
        });

        _.forOwn(this.events, (value, key) => {

            if (!this.compRef.instance[key])
                this.compRef.instance[key] = new EventEmitter()

            this.compRef.instance[key].subscribe(event => {
                (value instanceof EventEmitter) ? value.emit(event) : value(event)
            })

        });

    }


}
