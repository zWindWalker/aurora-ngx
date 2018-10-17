import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';


@Component({
    selector: 'aurora-input',
    template: `
        <ng-container
                dynamic-input
                [component_type]="component_type"
                [input_type]="input_type"
                [name]="name"
                [value]="value"
                [invalid]="invalid"
                [range]="range"
                [change]="change"
                [blur]="blur"
        >
        </ng-container>
    `,
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})

export class AuroraInputComponent implements OnInit {
    component_type = ''
    @Input() input_type = '';
    @Input() name = '';
    @Input() value: any = '';
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input() invalid;
    @Input() range = []

    constructor() {
    }

    auto_validator = e => {
        // Range
        if (this.range.length > 0) {
            const in_range = this.range[0] <= Number.parseInt(e.target.value) && Number.parseInt(e.target.value) <= this.range[1]

            if (!in_range) {
                this.value = this.range[1]
                this.change.emit(this.range[1])
            }
        }
    }

    ngOnInit(): void {
        this.component_type = (this.input_type === 'number' || this.input_type === 'phone') ? this.input_type : 'text'

        console.log(this.component_type)
    }

}
