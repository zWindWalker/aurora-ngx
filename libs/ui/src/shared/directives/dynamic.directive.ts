import {
    ChangeDetectorRef,
    Compiler,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter, Injector,
    Input,
    ModuleWithComponentFactories,
    NgModule, NgModuleRef,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    Type,
    ViewContainerRef
} from '@angular/core';

import _ from 'lodash';
import {CommonModule} from "@angular/common";
import {untilDestroyed} from "../../utils";


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
        private _compiler: Compiler,
        private _injector: Injector,
        private _m: NgModuleRef<any>
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
        if (this.compRef) this.compRef.destroy();
    }

    ///-----------------------------------------------  Template   -----------------------------------------------///


    createTemplate = () => {
        const tmpCmp = this.createTemplateComponent(this.template);
        const tmpModule = this.createTemplateModule(tmpCmp);

        this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
                const compFactory = moduleWithFactories.componentFactories.find(x => x.componentType === tmpCmp);
                // this.compRef = this.vcRef.createComponent(compFactory);
                this.compRef = compFactory.create(this._injector, [], null, this._m);

                this.vcRef.insert(this.compRef.hostView)
                this.initContext();
            })
            .catch(error => {
                console.log(error);
            });

    };

    private createTemplateComponent = (template: string) => {
        const metadata = new Component({
            selector: 'dynamic-template',
            template: template
        });

        return Component(metadata)((class DynamicComponent implements OnInit, OnChanges {
            constructor(private cd: ChangeDetectorRef) {
            }

            ngOnInit() {
                this.cd.markForCheck()
            }

            ngOnChanges(changes: SimpleChanges): void {
            }
        }));
    };

    private createTemplateModule = (componentType: Type<any>) => {
        const moduleMeta: NgModule = {
            declarations: [componentType]
        };
        return NgModule(moduleMeta)((): any => class DynamicModule {
        });
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
        this.parseContext('updated')
        if (typeof this.compRef.instance.ngOnChanges === 'function') {
            this.compRef.instance.ngOnChanges()
        } else {
            throw new Error(`${this.compRef.componentType.name} doesn't implement 'ngOnChanges'`);
        }

    };

    private parseContext = (context = 'all') => {
        _.forOwn(this.properties, (value, key) => {
            if (value !== undefined) this.compRef.instance[key] = value;
        });

        if (context === 'all') {
            _.forOwn(this.events, (value, key) => {

                if (!this.compRef.instance[key])
                    this.compRef.instance[key] = new EventEmitter()

                this.compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
                    (value instanceof EventEmitter)
                        ? value.emit(event)
                        : value(event)
                })

            });
        }

    }


}
