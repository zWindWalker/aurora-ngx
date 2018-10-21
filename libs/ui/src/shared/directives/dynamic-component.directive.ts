import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import _ from 'lodash';


@Directive({
  selector: '[dynamic_component]'
})
export class DynamicComponentDirective implements OnInit, OnDestroy, OnChanges {
  @Input() components: any = null;
  @Input() selector: string = null;
  @Input() properties: any;
  @Input() events: any;
  compRef: ComponentRef<any>;


  constructor(
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) {
  }

  ngOnInit(): void {

    if (this.selector) {
      console.log('component init')
      this.createComponent();
    }
  }

  ngOnChanges() {

    if (this.compRef) {
      console.log('component change')
      this.compRef.destroy();
      this.createComponent();
    }
  }

  ngOnDestroy() {
    this.compRef.destroy();
  }

  ///-----------------------------------------------  Component   -----------------------------------------------///

  createComponent = () => {
    const component = this.components[this.selector];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.compRef = this.vcRef.createComponent(factory);
    this.updateProperties();
  };

  private updateProperties = () => {
    console.log('component updated')
    _.forOwn(this.properties, (value, key) => {
      if (value !== undefined) this.compRef.instance[key] = value;
    });

    _.forOwn(this.events, (value, key) => {
      if (value && this.compRef.instance[key]) {
        this.compRef.instance[key].subscribe(event => value(event))
      }
    });
  };

}
