import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChildren
} from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService } from './form.service';
import { FormGroupComponent } from './components/form-group.component';


@Component({
  selector: 'aurora-form',
  template: `
      <form
              [formGroup]="form"
              (ngSubmit)="onSubmit($event)"
      >
          <ng-content></ng-content>
      </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuroraFormComponent implements OnInit, AfterViewInit {

  form: FormGroup = this.fb.group({});
  @Input() config: any[] = [];
  @Input() media_type: String;
  @Output() submit = new EventEmitter();

  @ViewChildren(FormGroupDirective) formGrDir;

  constructor(
    private formSvs: FormService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.formSvs._initializeForm(this.config, this.formGrDir, this.media_type);

  }


  ngAfterViewInit(): void {

  }


  onSubmit = (e: Event) => {
    if (e instanceof Event) {
      e.stopPropagation();
    } else {
      this.submit.emit(e);
    }

  };

}
