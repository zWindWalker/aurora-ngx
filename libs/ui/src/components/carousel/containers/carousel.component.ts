import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aurora-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class AuroraCarouselComponent implements OnInit {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() data = [
    { bgc: '#F44336' },
    { bgc: '#2ecc71' },
    { bgc: '#3498db' },
    { bgc: '#f1c40f' },
    { bgc: '#16a085' }
  ];

  index = 0;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

  }


  ///-----------------------------------------------  General Functions   -----------------------------------------------///

  previousSlide = () => {
    if (this.index !== 0) {
      this.index -= 1;
      this.cd.markForCheck();
    }
  };

  nextSlide = () => {
    if (this.index !== this.data.length - 1) {
      this.index += 1;
      this.cd.markForCheck();
    }
  };

}
