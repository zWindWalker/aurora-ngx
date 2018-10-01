import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-field',
  template: `
      <ng-container
              dynamic-field
              [invalid]="invalid"
              [config]="config"
              [control]="control"
              [change]="change"
              [blur]="blur"
      ></ng-container>

  `,
  styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() config: any = null;
  @Input() control: AbstractControl;
  @Input() invalid;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
