import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (typeof a[field] === 'string') {
        if (a[field].length < b[field].length) {
          return -1;
        }
        if (a[field].length > b[field].length) {
          return 1;
        }
        if (a[field].length === a[field].length) {
          return a[field].localeCompare(b[field]);
        }
        return a[field].localeCompare(b[field]);
      }
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
    }

}
