import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryModule } from '../components/Data Entry/data-entry.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    DataEntryModule
  ],
  exports: [
    DataEntryModule
  ]
})
export class AuroraUiModule {
}
