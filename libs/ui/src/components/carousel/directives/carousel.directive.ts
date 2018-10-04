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
import { ItemComponent } from '../components/item/item.component';

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective implements OnInit, OnDestroy, OnChanges {
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
      console.log(this.index);
      this.componentRef.destroy();
      this.createComponent();
    }
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  createComponent = () => {
    const factory = this.resolver.resolveComponentFactory<any>(ItemComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.src = this.data[this.index].bgc;

  };


}
