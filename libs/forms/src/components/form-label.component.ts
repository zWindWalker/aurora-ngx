import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormService } from '../form.service';
import { Subject } from 'rxjs';
import { AuroraForm } from '../form.model';

@Component({
  selector: 'form-label',
  template: `
      <label>{{config?.label}}</label>
  `,
  // language=SCSS
  styles: [`
      :host {
          display: flex;
          align-items: center;
      }

      label {
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.6rem;
          font-weight: 700;
          position: relative;
          & :after {
              content: ':';
              position: relative;
          }
      }
  `]
})
export class FormLabelComponent implements OnInit {
  name;
  config: AuroraForm;
  viewInit = new Subject();

  constructor(
    private formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.viewInit.subscribe(() => {
      this.config = this.formSvs._getControlConfig(this.name);
    });
  }


  initialize = (name) => {
    this.name = name;
    this.viewInit.next();
    this.cd.markForCheck();
  };


}
