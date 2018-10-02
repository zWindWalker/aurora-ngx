import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() data;
  image;
  name = '';

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(this.data);
    reader.onload = () => {
      this.image = reader.result;

      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    };
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


  ngOnChanges(changes: SimpleChanges): void {

  };


}
