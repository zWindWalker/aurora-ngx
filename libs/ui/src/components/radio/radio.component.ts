import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import default_template from './templates/default.template.html';

@Component({
  selector: 'aurora-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuroraRadioComponent implements OnInit, OnChanges {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() options;
  @Input() name: string;
  @Input() value: any = '';
  @Output() change = new EventEmitter();

  //language=HTML
  template


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log('radio init')
    console.log(this.template)
    if(this.options) {
      this.template = default_template;
      console.log(this.template)
      this.cd.detectChanges()
    }
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onClick = value => {
    this.value = value;
    // this.change.emit(value);
  };

  ngOnChanges(changes): void {
    console.log('radio change')
  }

}
