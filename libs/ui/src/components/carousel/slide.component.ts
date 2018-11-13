import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'slide',
  template: `
      <ng-container *ngTemplateOutlet="template"></ng-container>
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
export class SlideComponent implements OnInit {

  @Input() template: TemplateRef<any>;


  constructor(
    public el: ElementRef,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.cd.detectChanges();
  }

}
