import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import { ProductsService } from '../../Services/products.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor( private productService: ProductsService) { }
  products: Product[] = [ ]
  ngOnInit(): void{
    //async
    this.productService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    });
  }

}
