import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {AppService} from "../services/app.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService,
                private app: AppService) {
    }

    ngOnInit() {
        if (this.app.isAuthenticated) {
            this.productService.getProducts().subscribe(
                response => {
                    this.products = response;
                });
            console.log(this.products)
        }
    }

    addToCart(event) {
        this.productService.addToCart(event)
            .subscribe(response => console.log(response));
    }
}
