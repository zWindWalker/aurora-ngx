import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraUploadComponent } from './containers/upload.component';
import { ClickComponent } from './components/upload-zone/click/click.component';
import { DropComponent } from './components/upload-zone/drop/drop.component';
import { FileComponent } from './components/file/file.component';


@NgModule({
  declarations: [
    AuroraUploadComponent,
    ClickComponent,
    DropComponent,
    FileComponent
  ],
  imports: [CommonModule],
  exports: [AuroraUploadComponent]
})
export class UploadModule {
}
