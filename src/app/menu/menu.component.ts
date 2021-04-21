import { Component, OnInit } from '@angular/core';
import { menuItems } from './menuItems';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menuItems = menuItems;
faShoppingCart = faShoppingCart;
  constructor() { }

  ngOnInit(): void {
  }

}
