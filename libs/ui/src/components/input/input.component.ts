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
import {InputService} from "./input.service";
import {NumberComponent} from "./components/number/number.component";
import {PhoneComponent} from "./components/phone/phone.component";
import {DateComponent} from "./components/date/date.component";


@Component({
    selector: 'aurora-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuroraInputComponent implements OnInit {

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
        'phone': PhoneComponent,
        'date': DateComponent
    }

    component: ComponentRef<any>

    constructor(private inputSvs: InputService) {
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
        this.inputSvs._setInputConfig(
            this.type,
            this.name,
            this.value,
            this.change,
            this.blur,
            this.invalid,
            this.range
        )

        this.component = this.components[this.type]
    }
}
