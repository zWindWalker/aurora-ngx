import { AfterViewInit, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import _ from 'lodash';
import { AuroraForm } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit, AfterViewInit, OnChanges {
  private form: FormGroup = this.fb.group({});
  private form_config: AuroraForm[];
  private formGrDir: FormGroupDirective;
  private media_type;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  _initializeForm = (config: AuroraForm[], formGrDir: FormGroupDirective, media_type) => {

    _.each(config, control => {
      if (control.type !== 'submit') {
        this.form.addControl(control.name, this.fb.control(control.value));
      }
    });

    this.form_config = config;
    this.formGrDir = formGrDir;
    this.media_type = media_type;

    return this.form;
  };

  _getSubmittedStatus = () => {
    return this.formGrDir.submitted;
  };

  _getControl = (control): AbstractControl => {
    return this.form.get(control);
  };

  _getControlConfig = control => {
    return _.find(this.form_config, ['name', control]);
  };

  _setValue = (control, value) => {
    this.form.get(control).setValue(value);
  };

  _submit = () => {
    this.formGrDir.ngSubmit.emit(this.formattedFormData());
  };

  _onTouched = control => {
    this.form.get(control).markAsTouched();
    console.log(this.form.get(control))
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

}
