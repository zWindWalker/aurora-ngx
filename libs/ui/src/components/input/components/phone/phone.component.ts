import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aurora-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

    @Input() name = '';
    @Input() value: any = '';
    @Input() invalid;
    @Input() change: EventEmitter<any>;
    @Input() blur: EventEmitter<any>;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() { }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
