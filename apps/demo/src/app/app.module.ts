import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { UiModule } from '@aurora-ngx/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
