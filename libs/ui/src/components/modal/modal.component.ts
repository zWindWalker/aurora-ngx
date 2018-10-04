import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'aurora-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class AuroraModalComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
