import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() img : string = ''
  @Output () loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/img/default.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img);//cargo el evento hacia el padre
  }

}
