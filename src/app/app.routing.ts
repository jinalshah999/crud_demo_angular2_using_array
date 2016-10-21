import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { CalcComponent } from './calc/calc.component';
const router:Routes=[
  {path: '', redirectTo: '/allTask', pathMatch: 'full'},
  {path: 'allTask', component: TasksComponent},
  {path: 'addTask', component: AddtaskComponent},
  {path:'calc',component:CalcComponent}
];

export const routing=RouterModule.forRoot(router);