import {
  ChangeDetectorRef,
  Compiler,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  ModuleWithComponentFactories,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

import _ from 'lodash';


@Directive({
  selector: '[dynamic_template]'
})
export class DynamicTemplateDirective implements OnInit, OnDestroy, OnChanges {
  @Input() template: string = null;
  @Input() properties: any;
  @Input() events: any;
  compRef: ComponentRef<any> = null;


  constructor(
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef,
    private cd: ChangeDetectorRef,
    private compiler: Compiler
  ) {
  }

  ngOnInit(): void {
    console.log('template init');
    this.createTemplate();
  }

  ngOnChanges() {
    if (this.compRef) {
      console.log('template change');
      this.updateProperties();
    }
  }

  ngOnDestroy() {
    this.compRef.destroy();
  }

  ///-----------------------------------------------  Template   -----------------------------------------------///


  createTemplate = () => {
    const component = this.createTemplateComponent(this.template);
    const module = this.createTemplateModule(component);
    const compiler = this.createCompiler(module);

    compiler.then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
      const compFactory = moduleWithFactories.componentFactories.find(x => x.componentType === component);
      this.compRef = this.vcRef.createComponent(compFactory);
      this.updateProperties();
    })
      .catch(error => {
        console.log(error);
      });

  };

  private createTemplateComponent = (template: string) => {
    @Component({
      selector: 'dynamic-template',
      template: template
    })
    class TemplateComponent implements OnInit {
      ngOnInit(): void {
        console.log(this);
      }

    }

    return TemplateComponent;
  };

  private createTemplateModule = (component: Type<any>) => {
    @NgModule({
      imports: [CommonModule],
      declarations: [component]
    })
    class TemplateModule {
    }

    return TemplateModule;
  };

  private createCompiler = (module: Type<any>): Promise<any> => {
    return this.compiler.compileModuleAndAllComponentsAsync(module);
  };


  private updateProperties = () => {
    console.log('template updated');
    _.forOwn(this.properties, (value, key) => {
      if (value !== undefined) this.compRef.instance[key] = value;
    });

    _.forOwn(this.events, (value, key) => {
      if (value !== undefined && this.compRef.instance[key]) {
        this.compRef.instance[key].subscribe(event => value(event));
      }
    });


  };

}
