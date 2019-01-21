import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router' ;
import { ReactiveFormsModule} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { ReactiveloginComponent } from './reactivelogin.component' ;

@NgModule({
  declarations: [ReactiveloginComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "", component: ReactiveloginComponent },
    ]),
  ]
})
export class ReactiveloginModule { }
