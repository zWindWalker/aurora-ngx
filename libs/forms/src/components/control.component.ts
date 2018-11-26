import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { IonarFormService } from '../providers/form.service';
// import { IonarControlState } from '../models/AbstractControl';



@Component({
  selector: 'control',
  template: `

      <!--<form-label [control]="control"></form-label>-->

      <!--<field-->
              <!--[state]="state"-->
              <!--[name]="name"-->
      <!--&gt;</field>-->

      <!--<form-feedback [control]="control"></form-feedback>-->
  `,

  styles: [`
      :host-context(.hidden) {
          display: none;
      }

      form-label {
          grid-area: label;
      }

      form-field {
          grid-area: field;
      }

      form-feedback {
          grid-area: feedback;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlComponent implements OnInit, OnDestroy {
///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name = '';
  // @Output() change = new EventEmitter();
  // state: IonarControlState;

  @HostBinding('class.hidden') hidden: Boolean = true;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private cd: ChangeDetectorRef,
    private _formSvs: IonarFormService
  ) {
  }

  ngOnInit() {
    const formGroup: IonarFormGroup = this._formSvs.getFormGroup();

    this.state = formGroup.get(this.name);
    // this.hidden = this.formSvs._getControlConfig(this.name).hidden;
    //
    // const control = this.formSvs._getControl(this.name);
    // const config = this.formSvs._getControlConfig(this.name);
    //
    // control.valueChanges.subscribe(value => {
    //   const change_data = {
    //     selected_value: value,
    //     config: config
    //   };
    //
    //   if (config.options) {
    //     _.assign(change_data, {}, {
    //       selected_option: _.find(config.options, ['value', value])
    //     });
    //   }
    //
    //   this.change.emit(change_data);
    // });
  }

  ngOnDestroy(): void {
  }

}
