import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'aurora-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() type: String;
  @Input() name = '';
  @Input() value: any = '';
  @Input() change: Subject<any>;
  @Input() blur: Subject<any>;
  @Input() invalid: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {

  }

}
