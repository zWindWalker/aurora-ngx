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
    AuroraUploadComponent, untilDestroyed
} from '@aurora-ngx/ui';
import {AbstractControl} from '@angular/forms';
import {AuroraForm} from '../form.model';
import _ from "lodash";
import {ControlConfig} from "../models/ControlConfig";

@Directive({
    selector: '[dynamic_field]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
    @Input('control') private _control: ControlConfig;
    @Input('events') private _events: { [key: string]: Function }

    @Input('invalid') private _invalid: Boolean

    // invalid: control?.invalid && (control?.dirty || control?.touched || submitted),
    // type: state.properties.type,
    // placeholder: state.properties.placeholder,
    // name: name,
    // options: state.options,
    // value: state.value,
    // label: state.properties.checkbox_label,
    // properties: config.properties,
    // template: config.template

    private _compRef: ComponentRef<any>;

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
        private _resolver: ComponentFactoryResolver,
        private _vcRef: ViewContainerRef
    ) {
    }

    ngOnInit(): void {

        this.createComponent();

    }

    ngOnChanges() {
        if (this._compRef) {
            this.updateContext();
        }
    }

    ngOnDestroy() {
        if (this._compRef) this._compRef.destroy();
    }

    createComponent = () => {
        const component = this.components[this._control.state.type];
        const factory = this._resolver.resolveComponentFactory<any>(component);
        this._compRef = this._vcRef.createComponent(factory);
        this.initContext();
        // const component = this.components[this.config.type];
        //
        // const factory = this.resolver.resolveComponentFactory<any>(component);
        // this.componentRef = this.container.createComponent(factory);
        //
        //
        // if (this.componentRef.instance.change) {
        //   this.componentRef.instance.change.subscribe(event => this.change.emit(event));
        // }
        //
        // if (this.componentRef.instance.blur) {
        //   this.componentRef.instance.blur.subscribe(() => this.blur.emit());
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

    private initContext = () => {
        this.parseContext();

        if (typeof this._compRef.instance.ngOnInit === 'function') {
            this._compRef.instance.ngOnInit();
        } else {
            throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnInit'`);
        }
    };

    private updateContext = () => {
        this.parseContext('updated');
        if (typeof this._compRef.instance.ngOnChanges === 'function') {
            this._compRef.instance.ngOnChanges();
        } else {
            throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnChanges'`);
        }

    };

    private parseContext = (context = 'all') => {

        const state = this._control.state,
            properties = this._control.properties;

        _.forOwn(state, (value, key) => this._compRef.instance[key] = value)
        _.forOwn(properties, (value, key) => {
            if (value !== undefined) this._compRef.instance[key] = value;
        });

        if (context === 'all') {
            _.forOwn(this._events, (value, key) => {

                if (!this._compRef.instance[key])
                    this._compRef.instance[key] = new EventEmitter();

                this._compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
                    (value instanceof EventEmitter)
                        ? value.emit(event)
                        : value(event);
                });

            });
        }

    };
}
