import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const authRoutes: Routes = [
    {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
    {path: 'register', loadChildren: './pages/register/register.module#RegisterModule'},
    {path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordModule'},
    {path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordModule'}


];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ]

})
export class AuthModule {
}
