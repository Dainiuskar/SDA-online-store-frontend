import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAccountFormComponent} from "./user-account/user-account-form/user-account-form.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    {path: 'addUser', component: UserAccountFormComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }