import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    Injectable,
    Input,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {FormService} from './form.service';

import {FormTemplateComponent} from './components/form-template.component';
import {AuroraForm, AuroraFormTemplate} from './form.model';
import {untilDestroyed} from './utils/take-until-destroy';
import {FormGroupComponent} from './components/form-group.component';


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
    styles: [`
        form-group {
            display: grid;
            grid-template-areas: "label   field" ". feedback";
            grid-template-columns: 30% 70%;
            grid-template-rows: 80% 20%;
            margin-bottom: 1rem;
            height: auto;
            min-height: 6rem;
        }
    `],
    encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable()
export class AuroraFormComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

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

    this.formGrDir.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      if (data instanceof Event) {
        data.stopPropagation();
      } else if (this.form.valid) {
        this.submit.emit(data);
      }
    })
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
  }

}
