import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'aurora-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuroraModalComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() visible: Boolean = false;
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();
  @Output() close = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onClose();
  }
  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onClose = () => {
    this.close.emit();
  };

}
