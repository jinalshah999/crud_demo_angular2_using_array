import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskfilter'
})
export class TaskfilterPipe implements PipeTransform {
task1:any[];
task2:any[];
  transform(value: any[], args: any): any {
    //return value.filter(res=>res.Title.startsWith(args));

    if(args!='')
    {
      this.task1=value.filter(res=>res.Title.startsWith(args));
      this.task2=value.filter(res=>res.Status.startsWith(args));
      return this.task1.concat(this.task2);
    }
    else{
      return value;
    }
    
  }

}
