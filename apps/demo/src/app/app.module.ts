import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuroraFormsModule } from '@aurora-ngx/forms';
import { AuroraUiModule } from '@aurora-ngx/ui';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      AuroraFormsModule,
      AuroraUiModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,

        CoreModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
