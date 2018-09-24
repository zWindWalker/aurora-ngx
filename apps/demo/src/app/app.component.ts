import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aurora-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  config = [
    {
      type: 'input',
      name: 'input',
      label: 'Input'
    },
    {
      type: 'select',
      name: 'select',
      label: 'Select'

    }
  ]

}
