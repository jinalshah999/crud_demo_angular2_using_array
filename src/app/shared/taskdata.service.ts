import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable()
export class TaskdataService {

  constructor() { }
allTask:Task[]=[
  new Task('1','push your code to github','pending'),
  new Task('2','write email to manager','pending'),
  new Task('3','go to movie','done'),
new Task('4','get jio sim card','done')
];
getAllTask(){
  return this.allTask;
}
deleteTask(item:Task){

this.allTask.splice(this.allTask.indexOf(item),1);
}
addTask(item:Task)
{
this.allTask.push(item);
}
updateTask(olditem:Task,newitem:Task){
  this.allTask[this.allTask.indexOf(olditem)]=newitem;
}

}
