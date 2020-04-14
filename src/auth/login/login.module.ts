import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './containers/login/login.component';

export const ROUTES: Routes = [
  // Path '' zal de route nemen van waar we de module lazy loaden
  // Dit is auth.module.ts dus met value /login
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule { }
