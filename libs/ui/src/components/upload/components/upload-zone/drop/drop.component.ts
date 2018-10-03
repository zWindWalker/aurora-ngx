import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Output() change = new EventEmitter();
  @Input() properties;

  @HostBinding('class.drop_hover') drop_hover: Boolean = false;

  @HostListener('drop', ['$event'])
  onDrop = $event => {
    event.preventDefault();
    this.change.emit($event.dataTransfer.files);
    this.drop_hover = false;
  };

  @HostListener('dragover', ['$event'])
  onDragOver = $event => {
    event.preventDefault();
    this.drop_hover = true;
  };

  @HostListener('dragleave', ['$event'])
  onDragLeave = $event => {
    event.preventDefault();
    this.drop_hover = false;
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
