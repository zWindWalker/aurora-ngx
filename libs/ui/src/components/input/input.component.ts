import {
    ChangeDetectionStrategy,
    Component, ComponentRef,
    ElementRef,
    EventEmitter,
    HostBinding, Injector,
    Input,
    OnInit,
    Output, ViewChild
} from '@angular/core';
import {TextComponent} from "./components/text/text.component";
import {NumberComponent} from "./components/number/number.component";
import {PhoneComponent} from "./components/phone/phone.component";


@Component({
    selector: 'aurora-input',
    template: `
        <ng-container
                dynamic-input
                [type]="input_type"
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
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuroraInputComponent implements OnInit {
    input_type = ''
    @Input() type = '';
    @Input() name = '';
    @Input() value: any = '';
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input() invalid;
    @Input() range = []

    components = {
        'text': TextComponent,
        'number': NumberComponent,
        'phone': PhoneComponent
    }

    component: ComponentRef<any>

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
        this.input_type = (this.type === ('number' || 'phone')) ? this.type : 'text'
    }
}
