import { NgModule } from '@angular/core';
import { AuroraTextareaComponent } from './textarea.component';


@NgModule({
  declarations: [
    AuroraTextareaComponent
  ],
  exports: [AuroraTextareaComponent],
  entryComponents: [AuroraTextareaComponent]
})
export class TextareaModule {
}
