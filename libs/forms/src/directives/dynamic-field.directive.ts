import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {
  AuroraCheckboxComponent,
  AuroraDatePickerComponent,
  AuroraInputComponent,
  AuroraSelectComponent,
  AuroraTextareaComponent
} from '@aurora-ngx/ui';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[dynamic-field]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
  @Input() config;
  @Input() invalid;
  @Input() control: AbstractControl;
  @Input() change: EventEmitter<any>;
  @Input() blur: EventEmitter<any>;

  componentRef: ComponentRef<any>;

  components = {
    input: AuroraInputComponent,
    textarea: AuroraTextareaComponent,
    select: AuroraSelectComponent,
    datepicker: AuroraDatePickerComponent,
    checkbox: AuroraCheckboxComponent
  };

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    const component = this.components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.change.subscribe(event => this.change.emit(event));
    this.componentRef.instance.blur.subscribe(event => this.blur.emit(event));

    this.componentRef.instance.type = this.config.input_type;
    this.componentRef.instance.name = this.config.name;
    this.componentRef.instance.options = this.config.options;
    this.componentRef.instance.value = this.control.value;
    this.componentRef.instance.label = this.config.checkbox_label;
    this.componentRef.instance.invalid = this.invalid;

  }

  ngOnChanges() {
    if (this.componentRef) {
      this.componentRef.instance.invalid = this.invalid;
    }
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }


}
