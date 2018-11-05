import {BrowserModule} from '@angular/platform-browser';
import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {AuroraUiModule} from '@aurora-ngx/ui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NxModule.forRoot(),
        AuroraUiModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
