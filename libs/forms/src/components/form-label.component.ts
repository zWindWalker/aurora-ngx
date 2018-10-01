import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-label',
  template: `
      <label [for]="label" *ngIf="label">{{label}}</label>
  `,
  // language=SCSS
  styles: [`
      :host {
          display: flex;
          align-items: center;
      }

      label {
          color: rgba(0, 0, 0, 0.85);
          display: flex;
          font-size: 1.6rem;
          font-weight: 700;
          position: relative;
          & :after {
              content: ':';
              position: relative;
          }
      }
  `]
})
export class FormLabelComponent implements OnInit {
  @Input() label: any = null;

  constructor() {
  }

  ngOnInit() {
  }

}
