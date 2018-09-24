import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'aurora-forms',
  template: `
      <form
              [formGroup]="form"
              (submit)="onSubmit($event)"
      >
          <ng-container
                  *ngFor="let field of config"
                  dynamicField
                  [config]="field"
                  [group]="form"
          ></ng-container>
      </form>
  `,
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuroraFormComponent implements OnInit {

  @Input() config: any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup = () => {
    const group = this.fb.group({});

    _.each(this.config, control => group.addControl(control.name, this.fb.control(null)));

    return group;
  };

  onSubmit = e => {
    console.log(this.form.value);
  };

}
