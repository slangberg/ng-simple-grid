import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outputTrim'
})
export class OutputTrimPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    return value.slice(1, -1);
  }

}
