import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {ErrorInterceptor, JwtInterceptor} from './interceptors';
import {AuthGuard} from './guards/auth.guard';
import {ApiService, AuthService, JwtService} from './services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule
    ],
    exports: [
        FooterModule,
        HeaderModule,
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        ApiService,
        JwtService,
        JwtInterceptor,
        ErrorInterceptor,
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
