import {
    ChangeDetectorRef,
    Compiler,
    Component, ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Input, ModuleWithComponentFactories,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    ViewContainerRef
} from '@angular/core';
import {
    AuroraCheckboxComponent,
    AuroraDatePickerComponent,
    AuroraInputComponent,
    AuroraRadioComponent,
    AuroraSelectComponent,
    AuroraTextareaComponent,
    AuroraUploadComponent, InputModule
} from '@aurora-ngx/ui';
import {AbstractControl} from '@angular/forms';
import {AuroraForm} from '../form.model';

declare let Reflect: any;

@Directive({
    selector: '[dynamic-field]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
    @Input() config: AuroraForm;
    @Input() invalid;
    @Input() control: AbstractControl;
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();

    componentRef: ComponentRef<any>;

    components = {
        input: AuroraInputComponent,
        textarea: AuroraTextareaComponent,
        select: AuroraSelectComponent,
        datepicker: AuroraDatePickerComponent,
        checkbox: AuroraCheckboxComponent,
        upload: AuroraUploadComponent,
        radio: AuroraRadioComponent
    };

    constructor(
        // private com_factory: ComponentFactory<any>,
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef,
        private cd: ChangeDetectorRef,
        private compiler: Compiler
    ) {
    }

    ngOnInit(): void {
        // if (this.config.type) {
        //     this.createComponent();
        // }
        // let component: Type<any> = this.components[this.config.type];


    }

    ngOnChanges() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.createComponent();
        }
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }

    createComponent = () => {
        console.log(Reflect.getMetadata('annotations', AuroraInputComponent))

        const annotations = AuroraInputComponent['__annotations__']

        annotations[0].template = `<h1>dsfajioskdfjasldjflk</h1>`


        const metadata = new Component(annotations)
        Reflect.defineMetadata('annotations', [metadata], AuroraInputComponent)
        // let component = Component(metadata)(AuroraInputComponent)



        // this.com_factory.

        // let component = Component(metadata)(AuroraInputComponent)

        // console.log(AuroraInputComponent['__annotations__'])

        this.compiler.compileModuleAndAllComponentsAsync(InputModule)
            .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
                console.log('sdklfjslkj')
                return moduleWithComponentFactory.componentFactories.find(
                    x => x.componentType === Component(metadata)(AuroraInputComponent));
            }).then(factory => {
                console.log(factory)
               this.componentRef = this.container.createComponent(factory);
        });

        // const factory = this.resolver.resolveComponentFactory<any>(component);
        // this.componentRef = this.container.createComponent(factory);
        //
        //
        //
        //
        // if (this.componentRef.instance.change) {
        //     this.componentRef.instance.change.subscribe(event => this.change.emit(event));
        // }
        //
        // if (this.componentRef.instance.blur) {
        //     this.componentRef.instance.blur.subscribe(() => this.blur.emit());
        // }
        //
        // this.componentRef.instance.input_type = this.config.input_type;
        // if (this.config.placeholder) this.componentRef.instance.placeholder = this.config.placeholder;
        // if (this.config.hidden) this.componentRef.instance.hidden = this.config.hidden;
        //
        //
        // this.componentRef.instance.name = this.config.name;
        // this.componentRef.instance.options = this.config.options;
        // this.componentRef.instance.value = this.control.value;
        // this.componentRef.instance.label = this.config.checkbox_label;
        // this.componentRef.instance.invalid = this.invalid;
        // this.componentRef.instance.properties = this.config.properties;
    };


}
