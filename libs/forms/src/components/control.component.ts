import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IonarFormService } from '../providers/form.service';
import { ControlConfig } from '../models/ControlConfig';


@Component({
  selector: 'control',
  template: `

      <label [control]="_control"></label>

      <field [control]="_control"></field>

      <!--<form-feedback [control]="control"></form-feedback>-->
  `,

  styles: [`
      :host-context(.hidden) {
          display: none;
      }

      label {
          grid-area: label;
      }

      field {
          grid-area: field;
      }

      feedback {
          grid-area: feedback;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name = '';
  protected _control: ControlConfig;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private cd: ChangeDetectorRef,
    private _formSvs: IonarFormService
  ) {
  }

  ngOnInit() {


    this._control = this._formSvs.getFormGroup().get(this.name)._controlConfig;

    console.log(this._control);

  }

  ngOnDestroy(): void {
  }

}
