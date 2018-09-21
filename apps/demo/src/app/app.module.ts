import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { AuroraUiModule } from '@aurora-ngx/ui';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AuroraUiModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
