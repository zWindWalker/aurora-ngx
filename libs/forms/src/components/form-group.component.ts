import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Host,
    HostBinding,
    Input,
    OnInit,
    Optional,
    SkipSelf,
    ViewChild
} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {FormFieldComponent} from './form-field.component';
import {FormLabelComponent} from './form-label.component';
import {FormFeedbackComponent} from './form-feedback.component';
import {FormService} from "../form.service";

@Component({
    selector: 'form-group',
    template: `

        <form-label></form-label>

        <form-field></form-field>

        <form-feedback></form-feedback>
    `,

    styles: [`
        :host-context(.hidden)  {
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
export class FormGroupComponent implements OnInit, AfterViewInit {
///-----------------------------------------------  Variables   -----------------------------------------------///
    @Input() name = '';


    @ContentChild(FormFieldComponent) formFieldContent: FormFieldComponent;
    @ContentChild(FormLabelComponent) formLabelContent: FormLabelComponent;
    @ContentChild(FormFeedbackComponent) formFeedbackContent: FormFeedbackComponent;

    @ViewChild(FormFieldComponent) formFieldChild: FormFieldComponent;
    @ViewChild(FormLabelComponent) formLabelChild: FormLabelComponent;
    @ViewChild(FormFeedbackComponent) formFeedbackChild: FormFeedbackComponent;


    @HostBinding('class.hidden') hidden: Boolean = true

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor(
        @Optional() @Host() @SkipSelf()
        private formGroupDirective: FormGroupDirective,
        private cd: ChangeDetectorRef,
        private formSvs: FormService
    ) {
    }

    ngOnInit() {
        this.hidden = this.formSvs._getControlConfig(this.name).hidden;
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
