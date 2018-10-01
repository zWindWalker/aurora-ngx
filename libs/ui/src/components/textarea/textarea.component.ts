import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aurora-textarea',
  template: `
      <textarea
              [name]="name"
              [value]="value"
              [class.invalid]="invalid"
              tabindex="0"
              (change)="$event.stopPropagation(); change.emit($event.target.value);"
              (blur)="blur.emit()"
      ></textarea>
  `,
  styles: [`
      :host {
          display: flex;
          flex: 1;
      }

      textarea {
          width: 100%;
          max-width: 100%;
          height: 12rem;
          overflow-y: scroll;
      }
  `]
})
export class AuroraTextareaComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name = '';
  @Input() value: any = '';
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
