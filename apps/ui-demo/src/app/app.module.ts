import {BrowserModule} from '@angular/platform-browser';
import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {AuroraUiModule} from '@aurora-ngx/ui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JitCompilerFactory} from "@angular/platform-browser-dynamic";

const createJitCompiler = (compilerFactory: CompilerFactory) => {
    return compilerFactory.createCompiler();
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NxModule.forRoot(),
        AuroraUiModule
    ],
    providers: [
        {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
        {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
        {provide: Compiler, useFactory: createJitCompiler, deps: [CompilerFactory]}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
