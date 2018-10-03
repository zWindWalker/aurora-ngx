import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Output() change = new EventEmitter();
  @Input() properties;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
