import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aurora-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
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
