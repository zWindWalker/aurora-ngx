import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges, ViewEncapsulation
} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {FormService} from '../form.service';
import {Subject} from 'rxjs';
import {AuroraForm} from '../form.model';
import {untilDestroyed} from '../utils/take-until-destroy';


@Component({
    selector: 'form-field',
    template: `
        <ng-container *ngIf="name">
            <ng-container
                    dynamic-field
                    [invalid]="control?.invalid && (control?.dirty || control?.touched || submitted)"
                    [config]="config"
                    [control]="control"
                    (change)="onChanged($event)"
                    (blur)="onTouched()"
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
