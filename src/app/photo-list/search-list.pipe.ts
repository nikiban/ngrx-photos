import { Pipe, PipeTransform } from '@angular/core';
import { PhotoItem } from './store/models/photo-list.model';

@Pipe({
  name: 'searchList'
})
export class SearchListPipe implements PipeTransform {

  transform(value: Array<PhotoItem>, key: string, searchText: string): Array<PhotoItem> {
    return value.filter(item => {
      return item[key].toLowerCase().includes(searchText);
    });
  }

}
