import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() config: any = null;
  @Input() control: AbstractControl;
  @Input() change: Subject<any>;
  @Input() blur: Subject<any>;

  constructor() {
  }


  ngOnInit() {
    // console.log(this.form)
  }

}
