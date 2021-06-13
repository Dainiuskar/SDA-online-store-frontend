import {Component, OnInit} from '@angular/core';
import {OrderLine} from "../model/order-line";
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartList: OrderLine[];
    totalSum: number;


    constructor(private orderService: OrderService,
                private route: Router) {
    }

    ngOnInit(): void {
        this.orderService.getOrderLines()
            .subscribe(response => {
                this.cartList = response;
                this.calculateTotalSum();
            });
    }

    updateCart(productId: any, quantity: any) {
        this.orderService.updateOrderLine(productId.value, quantity.value)
            .subscribe(response => {
                this.cartList = response;
                this.calculateTotalSum();
            })
    }

    deleteItem(productId: any) {
        this.orderService.deleteOrderLine(productId.value)
            .subscribe(response => {
                this.cartList = response;
                this.calculateTotalSum();
            });
    }

    calculateTotalSum(){
        this.totalSum = 0;
        this.cartList.forEach(value => {
            this.totalSum = this.totalSum +
                (value.numberOfProducts * value.productPrice);
        });
    }

    placeOrder() {

    }
}
