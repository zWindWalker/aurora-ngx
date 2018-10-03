import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import _ from 'lodash';

// (ngSubmit)="submitted.emit(form.value)"
@Component({
  selector: 'aurora-form',
  template: `
      <form
              [formGroup]="form"
              (ngSubmit)="onSubmit($event)"
      >
          <form-group
                  *ngFor="let field of config"
                  [config]="field"
                  [formControlName]="field.name"
                  [submitted]="submitted"
          >
          </form-group>

          <ng-content></ng-content>

      </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuroraFormComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean = false;

  @Input() config: any[] = [];
  @Input() media_type: String;
  @Output() submit = new EventEmitter<any>();


  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
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

  convertToFormData = () => {
    const data = this.form.value;
    const form = new FormData();

    _.each(data, (value, key) => {
      if (_.isArray(value)) {
        _.each(value, file => form.append(`${key}[]`, file, file.name));
      }
      else form.append(key, value);

    });

    return form;
  };

  formattedFormData = () => {
    switch (this.media_type) {
      case 'json':
        return JSON.stringify(this.form.value);
      case 'form-data':
        return this.convertToFormData();
      default:
        return this.form.value;
    }


  };

  onSubmit = e => {
    e.stopPropagation();

    this.submitted = true;
    this.submit.emit(this.formattedFormData());
  };

}
