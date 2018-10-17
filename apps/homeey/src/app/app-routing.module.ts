import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/pages/home.component';
import {AuthGuard} from './core/guards/auth.guard';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadChildren: './features/home/home.module#HomeModule'},
    {path: 'about', loadChildren: './features/about/about.module#AboutModule'},
    {path: 'create-project', loadChildren: './features/create-project/create-project.module#CreateProjectModule'},

    /// Authentication Module

    {path: 'login', loadChildren: './protected/login/login.module#LoginModule'},
    {path: 'register', loadChildren: './protected/register/register.module#RegisterModule'},
    {path: 'change-password', loadChildren: './protected/change-password/change-password.module#ChangePasswordModule'},
    {path: 'profile', loadChildren: './protected/profile/profile.module#ProfileModule', canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}


