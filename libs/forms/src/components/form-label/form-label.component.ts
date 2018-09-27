import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent implements OnInit {
  @Input() label: any = null

  constructor() { }

  ngOnInit() {
  }

}
