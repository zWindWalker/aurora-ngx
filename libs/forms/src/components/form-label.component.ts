import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormService} from '../form.service';
import {Subject} from 'rxjs';
import {AuroraForm} from '../form.model';
import {untilDestroyed} from "@aurora-ngx/ui";

@Component({
    selector: 'form-label',
    template: `
        <label>{{config?.label || ''}}</label>
    `,
    styles: [`
        :host {
            display: flex;
            align-items: center;
        }

        label {
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.6rem;
            font-weight: 700;
            position: relative
        }

        label:after {
            content: ':';
            position: relative;
        }
    `]
})
export class FormLabelComponent implements OnInit, OnDestroy {
    name;
    config: AuroraForm;
    viewInit = new Subject();

    constructor(
        private formSvs: FormService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.viewInit.pipe(untilDestroyed(this)).subscribe(() => {
            this.config = this.formSvs._getControlConfig(this.name);
            this.cd.detectChanges()
        });
    }

    ngOnDestroy(): void {
    }


    initialize = (name) => {
        this.name = name;
        this.viewInit.next();
        this.cd.markForCheck();
    };


}
