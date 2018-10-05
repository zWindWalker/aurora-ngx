import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuroraForm } from '@aurora-ngx/forms';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() visible: Boolean;
  @Output() close = new EventEmitter();
  @Output() open_quiz = new EventEmitter();

  config: AuroraForm[] = [
    {
      type: 'input',
      name: 'name',
      label: 'Name'
    },
    {
      type: 'input',
      input_type: 'email',
      name: 'email',
      label: 'E-mail'
    },
    {
      type: 'input',
      input_type: 'number',
      name: 'mobile',
      label: 'Mobile'
    },
    {
      type: 'input',
      name: 'property_name',
      label: 'Property Name'
    }, {
      type: 'input',
      name: 'city',
      label: 'City'
    },
    {
      type: 'input',
      name: 'post_code',
      label: 'Post code'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
