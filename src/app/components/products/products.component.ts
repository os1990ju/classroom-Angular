import { Component, OnInit, Input} from '@angular/core';
import {Product} from '../../models/product.model';
import {RoomService} from '../../Services/room.service';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  filterItem = '';
  total:number = 0;
  listToItems: Product[]=[];
  @Input() products: Product[] = [ ]

   //se accesibilidad del servicio es privado
  constructor(
    private roomService: RoomService,
    private productService: ProductsService) {

    this.listToItems = roomService.getListToItems();
  }

 ngOnInit(): void {

 }

  onAddToList(product: Product){

    this.roomService.addItem(product);
    this.total = this.roomService.getTotal();
  }
}
