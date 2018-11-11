import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import default_template from './templates/default.template';

@Component({
  selector: 'aurora-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class AuroraRadioComponent implements OnInit, OnChanges {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() options;
  @Input() name: string;
  @Input() value: any = '';
  @Output() change = new EventEmitter();
  @Input() template: string = default_template;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


  onChange = e => {
    this.value = e;
    this.change.emit(e);
  };
}
