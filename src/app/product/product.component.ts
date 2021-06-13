import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() addProductToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.orderService.addToCart(this.product)
        .subscribe(()=>{
          this.router.navigate(['home/cart']).then()
        });
  }
}
