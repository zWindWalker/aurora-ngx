import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Host,
    Input,
    OnInit,
    Optional,
    SkipSelf,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {FormFieldComponent} from './form-field.component';
import {FormLabelComponent} from './form-label.component';
import {AuroraForm} from '../form.model';
import {FormFeedbackComponent} from './form-feedback.component';

@Component({
  selector: 'form-group',
  template: `

      <form-label></form-label>

      <form-field></form-field>

      <form-feedback></form-feedback>
  `,

  styles: [`      
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
export class FormGroupComponent implements OnInit, AfterViewInit {
///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name = '';

  config: AuroraForm;
  @ContentChild(FormFieldComponent) formFieldContent: FormFieldComponent;
  @ContentChild(FormLabelComponent) formLabelContent: FormLabelComponent;
  @ContentChild(FormFeedbackComponent) formFeedbackContent: FormFeedbackComponent;

  @ViewChild(FormFieldComponent) formFieldChild: FormFieldComponent;
  @ViewChild(FormLabelComponent) formLabelChild: FormLabelComponent;
  @ViewChild(FormFeedbackComponent) formFeedbackChild: FormFeedbackComponent;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf()
    private formGroupDirective: FormGroupDirective,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    // this.control = this.controlContainer.control.get(this.formControlName);
    // this.control.setValidators(get_validators(this.config));
    //
    // this.submit.subscribe(data => {
    //   this.submitted = this.formGroupDirective.submitted;
    //   this.cd.markForCheck();
    // });
  }

  ngAfterViewInit(): void {
    if (this.formFieldContent) {
      this.formFieldContent.initialize(this.name);
    }
    if (this.formFieldChild) {
      this.formFieldChild.initialize(this.name);
    }
    if (this.formLabelContent) {
      this.formLabelContent.initialize(this.name);
    }
    if (this.formLabelChild) {
      this.formLabelChild.initialize(this.name);
    }

    if (this.formFeedbackContent) {
      this.formFeedbackContent.initialize(this.name);

    }
    if (this.formFeedbackChild) {
      this.formFeedbackChild.initialize(this.name);

    }
  }


}
