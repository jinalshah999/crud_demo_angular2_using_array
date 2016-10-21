import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../shared/taskdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
status = ['pending','done'];
model = {Id:'',Title:'',Status:'pending'};
  constructor(private _taskdata:TaskdataService,private _router:Router) { }

  ngOnInit() {
  }
taskSubmit(){
  this._taskdata.addTask(this.model);
this._router.navigate(['/allTask']);
}
}
