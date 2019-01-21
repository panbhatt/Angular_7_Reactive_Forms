import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginModule  } from './login/login.module' ;
import {ReactiveloginModule  } from './reactivelogin/reactivelogin.module' ;

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => LoginModule
  },
  {
    path: "rlogin",
    loadChildren: () => ReactiveloginModule
  },
  { path: "", redirectTo: "rlogin", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
