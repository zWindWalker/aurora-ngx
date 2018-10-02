import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import lodash from 'lodash';

@Component({
  selector: 'form-feedback',
  template: `
      <!--<ng-container *ngIf="control.invalid && (control.dirty || control.touched)">-->
      <!--<p [hidden]="!control.hasError('required')">{{_.startCase(name)}} is required</p>-->
      <!---->

      <!--</ng-container>-->
      <ng-container>
          <p>{{_.startCase(name)}} is required</p>
      </ng-container>
  `,
  //language=SCSS
  styles: [`
      :host {
          display: flex;
          justify-content: flex-start;
          width: 100%;
      }

      p {
          color: #f5222d;
          font-size: 1.2rem;
          margin-top: 0.5rem;
      }
  `]
})
export class FormFeedbackComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() control: AbstractControl;
  @Input() name = '';
  _ = lodash;


  error_list = [];

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
    // console.log(this.control);
    // this.error_list = _.
    //   _.map(this.control.errors, (err, key) => {
    //
    // })
    // console.log(this.control.hasError('required'))
    // this.control.statusChanges.subscribe(result => {
    //   console.log(this.control.hasError('required'))
    // });
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
