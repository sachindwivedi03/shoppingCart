import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MycartComponent } from './mycart/mycart.component';
import { ShoppingPlaceComponent } from './shopping-place/shopping-place.component';

const appRoutes: Routes = 
[
    {path: '', redirectTo: '/auth' , pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'shop', component: ShoppingPlaceComponent},
    {path: 'mycart', component: MycartComponent, canActivate: [AuthGuard]},
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}