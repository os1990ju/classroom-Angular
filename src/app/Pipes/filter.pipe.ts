import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultItem = [];
    for(const products of value){
      if(products.name.toLowerCase().indexOf(args)> -1){
        resultItem.push(products)
      }
    }
    return resultItem;
  }

}
