import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input, OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';


@Component({
  selector: 'slide',
  template: `
      <ng-content></ng-content>
  `,
  styles: [`
      :host {
          display: flex;
          position: absolute;
          flex: 1;
          width: 100%;
          height: 100%;

      }
  `]
})
export class SlideComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() template: TemplateRef<any>;
  @Input() show: Boolean = false;
  @Input() index

  constructor(
    public el: ElementRef,
    private cd: ChangeDetectorRef,
    private vcRef: ViewContainerRef
  ) {
  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {

  }

  ngOnChanges() {
    if(this.show) this.vcRef.createEmbeddedView(this.template);
    else this.vcRef.remove(this.index)
  }


}
