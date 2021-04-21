import { Injectable } from '@angular/core';
import {products} from './products';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iitems, Iitem} from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Iitems = [];
  constructor( private http: HttpClient ) { }
  getProducts(): any {
    return products;
  }
  addToCart(product: Iitem): void {
    this.items.push(product);
  }
  getItems(): any {
    return this.items;
  }
  clearCart(): any {
    this.items.splice(0, this.items.length);
    return this.items;
  }
  deleteItem(i: Iitem): any {
    console.log(this.items);
    const index = this.items.indexOf(i);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    console.log(this.items);
  }
  getShippingPrices(): Observable<Array<object>>{
    const prices = this.http.get<{type: string, price: number}[]>('../shipping.json');
    return prices;
  }
}
