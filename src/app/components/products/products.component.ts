import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
       id:'1',
       name : 'producto 1',
       image: '../assets/img/product1.jpg',
       price:200
     },
    {
       id:'1',
       name : 'producto 2',
       image: '../assets/img/product1.jpg',
       price:200
     },
     {
       id:'1',
       name : 'producto 3',
       image: '../assets/img/product1.jpg',
       price:200
     },
    {
       id:'1',
       name : 'producto 4',
       image: '../assets/img/product1.jpg',
       price:200
     },
     {
       id:'1',
       name : 'producto 5',
       image: '../assets/img/product1.jpg',
       price:200
     },
    {
       id:'1',
       name : 'producto 6',
       image: '../assets/img/product1.jpg',
       price:200
     },
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
