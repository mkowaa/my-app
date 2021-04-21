import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { DataService } from '../data.service';
import {IProducts} from '../model';
import {Iitem} from '../model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProducts = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getListProducts();
  }
  getListProducts(): void {
    this.products = this.dataService.getProducts();
  }
  addProductToCart(product: any): void {
    this.dataService.addToCart(product);
    window.alert('Товар добавлен в корзину!');
  }

}
