import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  AuroraCheckboxComponent,
  AuroraDatePickerComponent,
  AuroraInputComponent,
  AuroraRadioComponent,
  AuroraSelectComponent,
  AuroraTextareaComponent,
  AuroraUploadComponent
} from '@aurora-ngx/ui';
import { IonarFormService } from '../providers/form.service';
// import { IonarAbstractControl, IonarFormService } from '@aurora-ngx/forms';
// import { IonarControlState } from '../models/AbstractControl';


@Component({
  selector: 'field',
  template: `
      <!--<ng-container *ngIf="control">-->
      <!--<ng-container-->
      <!--dynamic-->
      <!--[components]="dynamic_components"-->
      <!--[selector]="state.type"-->
      <!--[properties]="{-->
      <!--// invalid: control?.invalid && (control?.dirty || control?.touched || submitted),-->
      <!--type: state.properties.type,-->
      <!--placeholder: state.properties.placeholder,-->
      <!--name: name,-->
      <!--options: state.options,-->
      <!--value: state.value,-->
      <!--label: state.properties.checkbox_label,-->
      <!--properties: config.properties,-->
      <!--template: config.template-->
      <!--}"-->
      <!--[events]="{-->
      <!--change: onChanged,-->
      <!--blur: onTouched,-->
      <!--enter: onEntered-->
      <!--}"-->
      <!--&gt;-->
      <!--</ng-container>-->
      <!--</ng-container>-->
  `,
  styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  // @Input() state: IonarControlState;
  // @Input() name
  //
  //
  // submitted: Boolean = false;
  // config: AuroraForm;
  // viewInit = new Subject();

  dynamic_components = {
    input: AuroraInputComponent,
    textarea: AuroraTextareaComponent,
    select: AuroraSelectComponent,
    datepicker: AuroraDatePickerComponent,
    checkbox: AuroraCheckboxComponent,
    upload: AuroraUploadComponent,
    radio: AuroraRadioComponent
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: IonarFormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    // this.viewInit.pipe(untilDestroyed(this)).subscribe(() => {
    //   // this.control = this.formSvs._getControl(this.name);
    //   // this.config = this.formSvs._getControlConfig(this.name);
    //   // this.submitted = this.formSvs._getSubmittedStatus();
    //
    //   this._formSvs.formGroup.get(this.name);
    //   this.cd.detectChanges();
    // });
    //
    // this.formSvs.state_change.pipe(untilDestroyed(this)).subscribe(() => {
    //   this.config = this.formSvs._getControlConfig(this.name);
    //   this.submitted = this.formSvs._getSubmittedStatus();
    //   this.cd.detectChanges();
    // });

  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.cd.detach();
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this.formSvs._setValue(this.name, e);
  };

  onTouched = () => {
    // this.formSvs._onTouched(this.name);
  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };

}
