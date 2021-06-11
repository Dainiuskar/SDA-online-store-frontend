import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserAccountFormComponent} from "./user-account/user-account-form/user-account-form.component";
import {UserService} from "./services/user-service/user-service";
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {multicast} from "rxjs/operators";

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        UserAccountFormComponent,
        LoginComponent,
        ProductComponent,
        ProductsListComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
