import { AfterViewInit, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'select-option',
  template: `
      <p>
          {{data.label}}
      </p>`,
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() data = null;

  constructor() {
  }

  ngOnInit() {
    this.selected = this.data.selected
    this.disabled = this.data.disabled
  }



  @HostBinding('class.selected') selected: Boolean = false;
  @HostBinding('class.disabled') disabled: Boolean = false;

  @HostListener('click', ['$event.target']) onClick(btn) {

  }

}
