import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';


import _ from 'lodash'
import { FormTemplateComponent } from '@aurora-ngx/forms';

@Directive({
  selector: '[quiz_directive]'
})
export class QuizDirective implements OnInit, OnDestroy, OnChanges {
  @Input() data;
  @Input() index;
  componentRef: ComponentRef<any>;


  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.createComponent();
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
    const factory = this.resolver.resolveComponentFactory<any>(FormTemplateComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.name = this.data[this.index];
   if(this.index !== 0) {
     this.componentRef.instance.class = 'question'
   }

    console.log(this.data[this.index])
  };


}
