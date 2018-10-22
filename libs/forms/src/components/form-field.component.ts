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
import {AbstractControl} from '@angular/forms';
import {FormService} from '../form.service';
import {Subject} from 'rxjs';
import {AuroraForm} from '../form.model';
import {untilDestroyed} from '@aurora-ngx/utils';
import {
    AuroraCheckboxComponent,
    AuroraDatePickerComponent,
    AuroraInputComponent,
    AuroraRadioComponent,
    AuroraSelectComponent,
    AuroraTextareaComponent,
    AuroraUploadComponent
} from '@aurora-ngx/ui';


@Component({
    selector: 'form-field',
    template: `
        <ng-container *ngIf="name">
            <ng-container
                    dynamic
                    [components]="dynamic_components"
                    [selector]="config.type"
                    [properties]="{
                        invalid: control?.invalid && (control?.dirty || control?.touched || submitted),
                        input_type: config.input_type,
                        placeholder: config.placeholder,
                        hidden: config.hidden,
                        name: config.name,
                        options: config.options,
                        value: control.value,
                        label: config.checkbox_label,
                        properties: config.properties
                  }"
                    [events]="{
                          change: onChanged,
                          blur: onTouched
                   }"
            >
            </ng-container>
        </ng-container>
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
export class FormFieldComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    ///-----------------------------------------------  Variables   -----------------------------------------------///

    control: AbstractControl;
    name;
    submitted: Boolean = false;
    config: AuroraForm;
    viewInit = new Subject();

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
        private formSvs: FormService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {

        this.viewInit.pipe(untilDestroyed(this)).subscribe(() => {
            this.control = this.formSvs._getControl(this.name);
            this.config = this.formSvs._getControlConfig(this.name);
            this.submitted = this.formSvs._getSubmittedStatus();
        });

        this.formSvs.state_change.pipe(untilDestroyed(this)).subscribe(() => {
            this.submitted = this.formSvs._getSubmittedStatus();
            this.cd.detectChanges();
        });

    }

    ngAfterViewInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    ngOnDestroy(): void {
        this.cd.detach();
    }


    ///-----------------------------------------------  Main Functions   -----------------------------------------------///


    initialize = name => {
        this.name = name;
        this.viewInit.next();
        this.cd.markForCheck();
    };

    onChanged = e => {
        this.formSvs._setValue(this.name, e);
    };

    onTouched = () => {
        this.formSvs._onTouched(this.name);
    };


}
