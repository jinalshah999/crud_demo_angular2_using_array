import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
number1:number=0;
number2:number=0;
ans:number=0;
  constructor() { }

  ngOnInit() {
  }
add(){
this.ans=this.number1+this.number2;
}
}
