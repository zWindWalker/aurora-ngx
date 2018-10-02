import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'aurora-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class AuroraUploadComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  file_list = [];

  @Input() config;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///
  onFileChanged(file_list) {
    this.file_list = this.file_list.concat(_.map(file_list));
  }

};
