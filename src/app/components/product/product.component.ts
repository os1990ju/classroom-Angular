import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  active = "false";
  @Output() itemAdded = new EventEmitter<Product>(); //info tipo product
  @Input() product:Product = {
    id: '',
    name: '',
    image:'',
    price:0,

  }
  constructor() {
    this.addToLocalStorage;
    this.getLocalStorage()

  }

  ngOnInit(): void {
  }
  addToCart(){
    this.itemAdded.emit(this.product);


  }
  addToLocalStorage(){

    localStorage.setItem("false",this.active);
  }
  getLocalStorage(){
    return localStorage.getItem("active")
  }

}
