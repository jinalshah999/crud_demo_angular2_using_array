import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TaskdataService } from './shared/taskdata.service';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskfilterPipe } from './tasks/taskfilter.pipe';
import { AddtaskComponent } from './tasks/addtask.component';
import { HeaderComponent } from './header.component';
import { CalcComponent } from './calc/calc.component';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    AddtaskComponent,
    CalcComponent,
    TaskfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
