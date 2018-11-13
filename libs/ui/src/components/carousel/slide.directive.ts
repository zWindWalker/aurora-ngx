import { Directive, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[slide]'
})
export class SlideDirective implements OnInit, OnDestroy, OnChanges {


  constructor(
    public tplRef: TemplateRef<any>
  ) {
  }


  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }


}
