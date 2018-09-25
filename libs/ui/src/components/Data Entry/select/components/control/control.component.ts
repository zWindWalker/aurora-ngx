import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import rotate from '../../animations/rotate.animation';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  animations: [rotate]
})
export class ControlComponent implements OnInit {
  @Input() show_menu = false;
  @Input() label = null;

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.eRef.nativeElement.focus();
  }

  @HostBinding() tabindex = 0;

}
