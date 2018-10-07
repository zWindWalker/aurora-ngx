import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aurora-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class AuroraRadioComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() options;
  @Input() name: String;
  @Input() value: any;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onClick = value => {
    this.value = value;
    this.change.emit(value)
  }

}
