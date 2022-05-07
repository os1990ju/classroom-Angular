import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //para observables
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  total = 0;
  private listToItems: Product[]=[];
  private myCart = new BehaviorSubject<Product[]>([]);//observable
  myCart$ = this.myCart.asObservable();

  constructor() { }
  getTotal(){
    return this.total = this.listToItems.reduce((suma,item)=>suma+item.price,0);
  }
  addItem(product: Product){
    this.listToItems.push(product);
    this.myCart.next(this.listToItems);//aviso a los suscriptores

  }
  getListToItems(){
    return this.listToItems;
  }



}
