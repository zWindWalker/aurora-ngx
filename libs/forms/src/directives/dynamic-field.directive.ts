import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormGroup } from '@angular/forms';
import { FormSelectComponent } from '../components/form-select/form-select.component';

const components = {
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[dynamicField]'
})

export class DynamicFieldDirective implements OnInit {
  @Input() config;
  @Input() group: FormGroup;
  component;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}