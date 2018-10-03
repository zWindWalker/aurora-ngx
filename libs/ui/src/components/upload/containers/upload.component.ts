import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'aurora-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class AuroraUploadComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  file_list = [];
  @Output() change = new EventEmitter();
  @Input() invalid: Boolean = false;
  @Input() properties;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///
  onFileChanged(file_list) {
    this.file_list = this.file_list.concat(_.map(file_list));

    this.change.emit(this.file_list);
  }

};
