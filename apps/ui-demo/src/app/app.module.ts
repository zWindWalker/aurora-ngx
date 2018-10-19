import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import {AuroraUiModule} from "@aurora-ngx/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule,
      NxModule.forRoot(),
      AuroraUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
