import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'palyCount'
})
export class PalyCountPipe implements PipeTransform {

  transform(value: number): number| string {
    if (value >= 100000000) {
      return Math.floor(value / 100000000) + '億';
    } else if   (value >= 10000 || value < 100000000) {
     return Math.floor(value / 10000) + '萬';
    } else {
      return value;
    }
  }
}
