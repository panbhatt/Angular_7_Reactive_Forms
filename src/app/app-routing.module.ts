import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginModule  } from './login/login.module' ;
import {ReactiveloginModule  } from './reactivelogin/reactivelogin.module' ;
import { ReacDynamicAddressModule} from './reac-dynamic-address/reac-dynamic-address.module' ;

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => LoginModule
  },
  {
    path: "rlogin",
    loadChildren: () => ReactiveloginModule
  },
  {
    path: "dynamicElements",
    loadChildren: () => ReacDynamicAddressModule
  },
  { path: "", redirectTo: "rlogin", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
