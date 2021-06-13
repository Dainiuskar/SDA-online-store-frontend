import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProductsUrl = '/server/products/'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.allProductsUrl)
  }

  addToCart(product: Product): Observable<any> {
    return this.http.get(this.allProductsUrl + product.id)
  }
}
