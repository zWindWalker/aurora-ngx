import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import {AuroraUiModule} from "@aurora-ngx/ui";
import { AuroraFormsModule } from '@aurora-ngx/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule,
      NxModule.forRoot(),
      AuroraUiModule,
    AuroraFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
