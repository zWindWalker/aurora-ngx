import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'aurora-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuroraInputComponent {

  @Input() type: String;
  @Input() name = '';
  @Input() value: any = '';
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid;

}
