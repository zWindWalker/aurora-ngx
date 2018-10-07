import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList, TemplateRef, ViewChild,
  ViewChildren, ViewContainerRef
} from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService } from './form.service';
import { FormGroupComponent } from './components/form-group.component';
import { AuroraForm, AuroraFormTemplate } from '@aurora-ngx/forms';
import { FormTemplateComponent } from './components/form-template.component';


@Component({
  selector: 'aurora-form',
  template: `
    <ng-container 
            [formGroup]="form"
    >
        <form-template *ngIf="default_template"></form-template>
        <ng-content></ng-content>
    </ng-container>
      
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuroraFormComponent implements OnInit, AfterViewChecked {

  form: FormGroup = this.fb.group({});
  @Input() default_template: Boolean = false;
  @Input() config: AuroraForm[] = [];
  @Input() template_config: AuroraFormTemplate = {};
  @Input() media_type: String;
  @Output() submit = new EventEmitter();

  @ViewChild(FormGroupDirective) formGrDir: FormGroupDirective;
  @ContentChildren(FormGroupComponent) formGrCom: QueryList<FormGroupComponent>;
  @ContentChildren(FormTemplateComponent) formTplCom: QueryList<FormTemplateComponent>;

  constructor(
    private formSvs: FormService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.formSvs._initializeForm(this.config, this.template_config, this.formGrDir, this.media_type);
    this.formGrDir.ngSubmit.subscribe(data => {
      if (data instanceof Event) {
        data.stopPropagation();
      } else {
        this.submit.emit(data);
      }
    })
  }

  ngAfterViewChecked(): void {
  }

}
