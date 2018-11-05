import {BrowserModule} from '@angular/platform-browser';
import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JitCompilerFactory} from "@angular/platform-browser-dynamic";

const createJitCompiler = (compilerFactory: CompilerFactory) => {
    return compilerFactory.createCompiler();
}


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,

        CoreModule
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
