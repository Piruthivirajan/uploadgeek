import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent } from './register.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';

const appRouts: Routes=[
    {
        path:'',
        component: HomeComponent 
    }
    ,
     {
        path:'home',
        component: HomeComponent
    },
     {
        path:'register',
        component: RegisterComponent
    }
 
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


