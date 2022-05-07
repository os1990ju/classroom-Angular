+9
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  activos: string []=[""];
  item: string='';
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
    this.toggleMenu();
  }

  ngOnInit(): void {
    this.toggleMenu();
  }
  addToCart(){
    this.itemAdded.emit(this.product);


  }
  addToLocalStorage(){


  }
  getLocalStorage(){
    return localStorage.getItem("active")
  }
  toggleMenu(){
    let item = this.product.id;
    let bc =Object.keys(localStorage);
    if(bc.length>0){
        for(let i=0; i<bc.length; i++){
          this.activos.push(bc[i]);
          console.log(this.activos.indexOf((item)))
    }
    if(!this.activos.includes(JSON.stringify(item)))
    localStorage.setItem(item, JSON.stringify(item));
  }else{
      localStorage.setItem(item, JSON.stringify(item));
    }
    console.log(this.activos.indexOf(String(item)));
}}
