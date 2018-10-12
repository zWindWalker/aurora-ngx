import {Component, EventEmitter, Host, HostListener, Input, OnInit, Optional, Output, SkipSelf} from '@angular/core';
import {AuroraInputComponent} from "../../input.component";
import {InputService} from "../../input.service";

@Component({
    selector: 'text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
    config

    constructor(public inputSvs: InputService) {
    }

    ngOnInit() {
        this.config = this.inputSvs._getInputConfig()
    }
}
