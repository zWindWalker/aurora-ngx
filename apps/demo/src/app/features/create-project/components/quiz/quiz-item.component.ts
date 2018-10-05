import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-item',
  template: `
      <span class="question">{{question}}</span>
      <aurora-radio [options]="options"></aurora-radio>
  `,
  styles: [`

  `]
})
export class QuizItemComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() question;
  @Input() options;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
