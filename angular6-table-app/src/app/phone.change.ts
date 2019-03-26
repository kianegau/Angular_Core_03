import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'replace'
})
export class PhoneFormat implements PipeTransform {
    newVal: string;
   transform(val: string): string {
    this.newVal = val.replace(/-/g, '');
    return '(+84)' + this.newVal;
   }
}
