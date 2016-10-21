import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskdataService } from '../shared/taskdata.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

allTask:Task[]=[];
  constructor(private _taskdata:TaskdataService) { }

  ngOnInit() {

    this.allTask=this._taskdata.getAllTask();
  }
delTask(item:Task){
  this._taskdata.deleteTask(item);
}
}
