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
  private show_feedback: Boolean;
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
    media_type,
    show_feedback
  ) => {

    _.each(config, control => {
      if (control.type !== 'submit') {
        this.form.addControl(control.name, this.fb.control(control.value, get_validators(control)));
      } else if (control.options) {
        this.form.addControl(control.name, this.fb.control(control.value || control.options[0].value, get_validators(control)));
      }

    });

    this.form_config = config;
    this.form_template_config = template_config;
    this.formGrDir = formGrDir;
    this.media_type = media_type;
    this.show_feedback = show_feedback;
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
    const config = _.find(this.form_config, ['name', control]);
    return _.assign(config, {}, {
      focus: false
    });
  };

  _getControlValid = control => this.form.get(control).valid;

  _getFormConfig = () => {
    return {
      config: this.form_config,
      template_config: this.form_template_config
    };
  };

  _getFeedbackStatus = () => this.show_feedback;

  ///-----------------------------------------------  Set   -----------------------------------------------///

  _setValue = (control, value) => {
    this._markAsDirty(control);
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

  _onEntered = control => {
    // console.log(_.keys(this.form.controls).indexOf(control));
    this.form.get(control).markAsTouched();
    this.state_change.next();
  };

  _markAsDirty = (control) => {
    this.form.get(control).markAsDirty();
    this.state_change.next();
  };

  _showLoading = (control) => {
    const config_index = this.form_config.indexOf(_.find(this.form_config, ['name', control]));
    this.form_config[config_index].properties.loading = true;
    this.state_change.next();
  };

  _stopLoading = (control) => {
    const config_index = this.form_config.indexOf(_.find(this.form_config, ['name', control]));

    this.form_config[config_index].properties.loading = false;
    this.state_change.next();
  };

  convertToFormData = data => {
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

    const formatted_form_data = _.omit(this.form.value, ['confirm_password', 'current_password']);

    if (this.media_type) {
      switch (this.media_type.toLowerCase()) {
        case 'json':
          return JSON.stringify(formatted_form_data);
        case 'form-data':
          return this.convertToFormData(formatted_form_data);
        default:
          return formatted_form_data;
      }
    }

    return formatted_form_data;
  };


}
