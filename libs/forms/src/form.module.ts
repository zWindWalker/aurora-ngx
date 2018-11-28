import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonarFormComponent} from './form.component';
import {ReactiveFormsModule} from '@angular/forms';


import {AuroraUiModule} from '@aurora-ngx/ui';

import {DynamicFieldDirective} from './directives/dynamic-field.directive';

import {FieldComponent} from './components/field.component';

import {SubmitDirective} from './directives/submit.directive';

import {IonarFormService} from './providers/form.service';
import {ControlComponent} from './components/control.component';
import {LabelComponent} from "./components/label.component";
import {FeedbackComponent} from "./components/feedback.component";


@NgModule({
    declarations: [
        IonarFormComponent,
        FieldComponent, ControlComponent, LabelComponent, FeedbackComponent,
        DynamicFieldDirective, SubmitDirective
    ],
    providers: [IonarFormService],
    imports: [

        CommonModule,
        ReactiveFormsModule,
        AuroraUiModule
    ],
    exports: [
        IonarFormComponent,
        FieldComponent,
        SubmitDirective,
        ControlComponent,
        LabelComponent, FeedbackComponent,
    ]
})
export class IonarFormsModule {
}
