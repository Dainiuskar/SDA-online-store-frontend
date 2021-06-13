import {Product} from "./product";

export class OrderLine {
    id: string;
    product: Product;
    numberOfProducts: number;
    productPrice: number;
}
