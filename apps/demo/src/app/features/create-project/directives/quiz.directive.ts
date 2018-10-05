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
import { QuizItemComponent } from '../components/quiz/quiz-item.component';

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
    const factory = this.resolver.resolveComponentFactory<any>(QuizItemComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.question = this.data[this.index].question;
    this.componentRef.instance.options = this.data[this.index].options;
  };


}
