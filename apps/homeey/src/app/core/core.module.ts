import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {JwtInterceptor} from './interceptors';
import {AuthGuard} from '../features/auth/providers/auth.guard';
import {ApiService} from './services';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
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
