import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aurora-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class AuroraCheckboxComponent implements OnInit {

  @Input() label: any = '';
  @Input() value: Boolean = false;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid: Boolean = false;


  @HostListener('click')
  onClick = () => {
    this.value = !this.value;
    this.change.emit(this.value);
  };

  constructor() {
  }

  ngOnInit() {
  }
}
