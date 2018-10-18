import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {ErrorInterceptor, JwtInterceptor} from './interceptors';
import {AuthGuard} from '../features/auth/providers/auth.guard';
import {ApiService} from './services';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";


@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        environment.production ? [] : AkitaNgDevtools.forRoot()
    ],
    exports: [
        FooterModule,
        HeaderModule,
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        ApiService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        HttpClientModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}
