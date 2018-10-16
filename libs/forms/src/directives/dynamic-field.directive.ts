import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Input,
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
    AuroraUploadComponent
} from '@aurora-ngx/ui';
import {AbstractControl} from '@angular/forms';
import {AuroraForm} from '../form.model';

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
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {
    }

    ngOnInit(): void {
        if (this.config.type) {
            this.createComponent();
        }
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
        const component = this.components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);

        this.componentRef = this.container.createComponent(factory);


        if (this.componentRef.instance.change) {
            this.componentRef.instance.change.subscribe(event => this.change.emit(event));
        }

        if (this.componentRef.instance.blur) {
            this.componentRef.instance.blur.subscribe(() => this.blur.emit());
        }

        this.componentRef.instance.type = this.config.input_type;
        this.componentRef.instance.name = this.config.name;
        this.componentRef.instance.options = this.config.options;
        this.componentRef.instance.value = this.control.value;
        this.componentRef.instance.label = this.config.checkbox_label;
        this.componentRef.instance.invalid = this.invalid;
        this.componentRef.instance.properties = this.config.properties;
    };


}
