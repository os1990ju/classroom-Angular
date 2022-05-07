import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../Services/room.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  counter=0;
  activeMenu = false;
  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.roomService.myCart$.subscribe(products =>{
      this.counter = products.length;
    }
    )
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
