import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calc-app';
  total = '';
  calculation = '';
  currentNum = '';
  getSecondNum = false;
  operatorSet = false;
  decimalSet = false;


  // tslint:disable-next-line: typedef
  getNum(n: string){
    if (n === '.'){
      if (this.decimalSet){
        return;
      }
      this.decimalSet = true;
    }
    this.calculation += n;
    this.currentNum = n;
    console.log(this.calculation);
  }

  // tslint:disable-next-line: typedef
  getOperator(n: string){
    if (this.operatorSet){
      return;
    }else{
      if (this.currentNum === ''){
        this.calculation += '0';
      }
      this.calculation += n;
      this.operatorSet = true;
      this.decimalSet = false;
    }
    console.log(n);
  }

  // tslint:disable-next-line: typedef
  clearDisplay(){
    this.calculation = '';
    this.operatorSet = false;
    console.log(this.calculation);
  }

  // tslint:disable-next-line: typedef
  getAnswer(){
    // tslint:disable-next-line: no-eval
    this.total = eval(this.calculation);
    console.log(this.total);
  }
}

