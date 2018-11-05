import {
    ChangeDetectorRef,
    Compiler,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Injector,
    Input,
    ModuleWithComponentFactories,
    NgModule,
    NgModuleRef,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewContainerRef
} from '@angular/core';

import _ from 'lodash';
import {untilDestroyed} from '../../utils';


export function CustomComponent(annotation: any) {
    return function (target) {
        const component = new Component(annotation);
        Component(component)(target);

    };
}


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
            this.createTemplate();
        }
        if (this.selector) {
            this.createComponent();
        }
    }

    ngOnChanges() {
        if (this.compRef) {
            this.updateContext();
        }
    }

    ngOnDestroy() {
        if (this.compRef) this.compRef.destroy();
    }

    ///-----------------------------------------------  Template   -----------------------------------------------///


    createTemplate = () => {
        const tmpCmp = this.createTemplateComponent(this.template);
        const tmpModule = NgModule({declarations: [tmpCmp]})(class {
        });

        this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
                const compFactory = moduleWithFactories.componentFactories.find(x => x.componentType === tmpCmp);
                // this.compRef = this.vcRef.createComponent(compFactory);
                this.compRef = compFactory.create(this._injector, [], null, this._m);

                this.vcRef.insert(this.compRef.hostView);
                this.initContext();
            })
            .catch(error => {
                console.log(error);
            });

    };

    // private createTemplateComponent = (template: string) => {
    //
    //   return Component({
    //     selector: 'dynamic-template',
    //     template: template
    //   })(class DynamicComponent implements OnInit, OnChanges {
    //     constructor(private cd: ChangeDetectorRef) {
    //     }
    //
    //     ngOnInit() {
    //       this.cd.markForCheck();
    //     }
    //
    //     ngOnChanges(changes: SimpleChanges): void {
    //     }
    //   });
    // };


    private createTemplateComponent = (template: string) => {

        @CustomComponent({
            selector: 'dynamic-component',
            template: template
        })
        class DynamicComponent implements OnInit, OnChanges {
            constructor(private cd: ChangeDetectorRef) {
            }

            ngOnInit() {
                this.cd.markForCheck();
            }

            ngOnChanges(changes: SimpleChanges): void {

            }
        }

        return DynamicComponent;
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
        this.parseContext();

        if (typeof this.compRef.instance.ngOnInit === 'function') {
            this.compRef.instance.ngOnInit();
        } else {
            throw new Error(`${this.compRef.componentType.name} doesn't implement 'ngOnInit'`);
        }
    };

    private updateContext = () => {
        this.parseContext('updated');
        if (typeof this.compRef.instance.ngOnChanges === 'function') {
            this.compRef.instance.ngOnChanges();
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
                    this.compRef.instance[key] = new EventEmitter();

                this.compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
                    (value instanceof EventEmitter)
                        ? value.emit(event)
                        : value(event);
                });

            });
        }

    };


}
