import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAccountFormComponent} from "./user-account/user-account-form/user-account-form.component";
import {LoginComponent} from "./login/login.component";
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'addUser', component: UserAccountFormComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
