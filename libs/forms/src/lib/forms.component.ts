import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

// (ngSubmit)="submitted.emit(form.value)"
@Component({
  selector: 'aurora-form',
  template: `
      <form
              [formGroup]="form"
              (ngSubmit)="$event.stopPropagation(); submit.emit(form.value)"
      >
          <form-group
                  *ngFor="let field of config"
                      [config]="field"
                      [formControlName]="field.name"
          >
          </form-group>

          <ng-content></ng-content>

      </form>
  `
})
export class AuroraFormComponent implements OnInit {

  @Input() config: any[] = [];
  @Output() submit = new EventEmitter<any>();

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

}
