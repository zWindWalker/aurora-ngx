import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],

})
export class ItemComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() src: String;

  @HostBinding('style.background-color') bgc: String;



  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {

    this.bgc = this.src;
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
