import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Product} from "../model/product";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    orderUrl = '/server/order/'

    constructor(private http: HttpClient) {
    }

    getOrderLines(): Observable<any> {
        return this.http.get<any>(this.orderUrl + 'orderLines');
    }

    updateOrderLine(productId: number, quantity: number): Observable<any> {
        const map = {'id': productId, 'amount': quantity};
        return this.http.put<any>(this.orderUrl + 'updateOrderLine', map);
    }

    deleteOrderLine(productId: number): Observable<any> {
        return this.http.delete<any>(this.orderUrl + 'deleteOrderLine/' + productId);
    }

    addToCart(product: Product) {
        return this.http.post<Product>(this.orderUrl + 'product', product);
    }
}


