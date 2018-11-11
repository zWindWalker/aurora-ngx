import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/providers/auth.guard';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './features/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './features/about/about.module#AboutModule' },
  { path: 'create-project', loadChildren: './features/create-project/create-project.module#CreateProjectModule' },
  { path: 'auth', loadChildren: './features/auth/auth.module#AuthModule' },
  { path: 'invoice', loadChildren: './features/invoice/invoice.module#InvoiceModule' },
  { path: 'profile', loadChildren: './features/profile/profile.module#ProfileModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: !!environment.production })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


