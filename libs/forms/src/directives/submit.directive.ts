import { Directive, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Directive({
  selector: '[submit_form]'
})
export class SubmitDirective implements OnInit, OnDestroy, OnChanges {

  @HostListener('click')
  onClick = () => {
    this.formSvs._submit();
  };

  constructor(private formSvs: FormService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }


}
