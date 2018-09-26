import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
      <ng-container *ngFor="let option of options">
          <select-option
                  [data]="option"
                  (click)="this.onSelectOption.emit(option)"
          ></select-option>
      </ng-container>
  `,
  styles: [`
      :host {
          background-color: white;
          border-radius: 5px;
          box-sizing: border-box;
          border: 1px solid rgb(196, 202, 212);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          overflow: hidden;
          padding: 0 10px;
      }
  `]
})
export class MenuComponent implements OnInit {
  @Input() options = [];
  @Output() onSelectOption = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
