import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'form-feedback',
  template: `
      <ng-container *ngIf="control.invalid && (control.dirty || control.touched || submitted)">
          <ng-container *ngFor="let err of error_list">
              <p>{{err}}</p>
          </ng-container>

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
export class FormFeedbackComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() control: AbstractControl;
  @Input() name = '';
  @Input() feedback;
  @Input() submitted: Boolean = false;

  error_list = [];

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {

    this.control.statusChanges.subscribe(status => {

      this.error_list = _.map(this.control.errors, (value, key) => this.generate_feedback(key));
    });
    this.error_list = _.map(this.control.errors, (value, key) => this.generate_feedback(key));
  }


  generate_feedback = validator => {

    const feedback = {
      ...this.feedback
    };

    switch (validator) {
      case 'required':
        if (this.name === 'confirm_password') {
          return feedback.required || `You need to confirm password`;
        }
        return feedback.required || `${_.startCase(this.name)}  is required`;
      case 'confirm_password':
        return feedback.confirm_password || `Password not match`;
      case 'agreement':
        return feedback.agreement || `You must agree to the terms and conditions before continuing!`;
      case 'email' :
        return feedback.email || `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
    }
  };

  ngOnChanges(changes): void {

  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
