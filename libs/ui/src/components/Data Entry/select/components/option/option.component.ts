import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'select-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() data = null
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
