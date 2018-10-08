import { AfterViewInit, Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import _ from 'lodash';
import { AuroraForm, AuroraFormTemplate } from './form.model';
import { Subject } from 'rxjs';
import { get_validators } from './utils/validators';


@Injectable()

export class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private form: FormGroup = this.fb.group({});
  private form_config: AuroraForm[];
  private form_template_config: AuroraFormTemplate;
  private formGrDir: FormGroupDirective;
  private media_type;
  public state_change = new Subject();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnDestroy(): void {

  }

  _initializeForm = (
    config: AuroraForm[],
    template_config: AuroraFormTemplate,
    formGrDir: FormGroupDirective,
    media_type
  ) => {

    _.each(config, control => {
      if (control.type !== 'submit') {
        this.form.addControl(control.name, this.fb.control(control.value, get_validators(control)));
      }
    });

    this.form_config = config;
    this.form_template_config = template_config;
    this.formGrDir = formGrDir;
    this.media_type = media_type;

    return this.form;
  };
  ///-----------------------------------------------  Get   -----------------------------------------------///

  _getSubmittedStatus = () => {
    return this.formGrDir.submitted;
  };

  _getControl = (control): AbstractControl => {
    return this.form.get(control);
  };

  _getControlConfig = control => {
    return _.find(this.form_config, ['name', control]);
  };

  _getFormConfig = () => {
    return {
      config: this.form_config,
      template_config: this.form_template_config
    };

  };

  ///-----------------------------------------------  Set   -----------------------------------------------///

  _setValue = (control, value) => {
    this.form.get(control).setValue(value);
  };

  _submit = () => {
    this.formGrDir.onSubmit(this.formattedFormData());
    this.state_change.next();
  };

  _onTouched = control => {
    this.form.get(control).markAsTouched();
    this.state_change.next();
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
