import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {FormService} from '../form.service';
import _ from 'lodash';
import {AuroraForm} from '../form.model';

@Component({
    selector: 'form-template',
    template: `
        <ng-container
                *ngFor="let group of data"
        >
            <form-group [name]="group.name" [class]="class" [id]="id">
            </form-group>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTemplateComponent implements OnInit, AfterViewChecked, OnChanges {
    ///-----------------------------------------------  Variables   -----------------------------------------------///

    data: AuroraForm[] = [];
    @Input() name = '';
    @Input() class
    @Input() id

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor(
        private formSvs: FormService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {

    }

    ngAfterViewChecked(): void {
        const form = this.formSvs._getFormConfig();
        if (!this.name) {
            if (_.isEmpty(form.template_config, true)) {
                this.data = form.config;
                this.cd.detectChanges();
            } else if (this.data.length === 0) {
                _.forOwn(form.template_config, (value, key) => {
                    const tmp = _.filter(form.config, item => value.includes(item.name));
                    this.data = _.concat(this.data, tmp)
                });
            }
        }

        else {
            const template = form.template_config[this.name];
            this.data = _.filter(form.config, item => template.includes(item.name));

        }
        this.cd.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {

    }


    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
