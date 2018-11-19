import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'aurora-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class AuroraRadioComponent implements OnInit, AfterViewInit, OnChanges {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @ViewChild('default_template') default_template: TemplateRef<any>;

  @Input() options;
  @Input() name: string;
  @Input() value: any = '';
  @Output() change = new EventEmitter();
  @Input() template: TemplateRef<any>;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (!this.template) this.template = this.default_template;
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


  onChange = e => {
    this.value = e;
    this.change.emit(e);
  };


}
