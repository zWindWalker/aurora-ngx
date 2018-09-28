import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

// (ngSubmit)="submitted.emit(form.value)"
@Component({
  selector: 'aurora-form',
  template: `
      <form
              [formGroup]="form"
              (ngSubmit)="onSubmit($event)"
      >
          <form-field *ngFor="let field of config" [config]="field" [group]="form">
          </form-field>

          <ng-content></ng-content>

      </form>
  `,
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuroraFormComponent implements OnInit {

  @Input() config: any[] = [];
  @Output() submitted = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup = () => {
    const group = this.fb.group({});

    _.each(this.config, control => {
      control.type !== 'submit' && group.addControl(control.name, this.fb.control(control.value));
    });

    return group;
  };

  onSubmit = e => {
    console.log(this.form.value);
  };

}
