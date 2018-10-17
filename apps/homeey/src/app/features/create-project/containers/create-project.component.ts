import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  quiz_visible: Boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

}
