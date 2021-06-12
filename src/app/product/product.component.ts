import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() addProductToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addProductToCart.emit(this.product);
  }
}
