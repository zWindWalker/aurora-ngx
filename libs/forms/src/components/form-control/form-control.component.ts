import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() config: any = null;
  @Input() group: FormGroup;


  constructor(private sanitizer: DomSanitizer) {
  }


  ngOnInit() {
  }

}
