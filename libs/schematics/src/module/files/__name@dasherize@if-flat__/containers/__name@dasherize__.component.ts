import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
