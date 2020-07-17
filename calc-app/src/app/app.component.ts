import { Component, OnInit } from '@angular/core';
import { ResultService } from './Services/result.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'calc-app';
  total: any;
  calculation = '';
  currentNum = '';
  getSecondNum = false;
  operatorSet = false;
  decimalSet = false;
  resultList: any;
  result: any;

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.getResults();
  }

  constructor(private resultService: ResultService){}

  // tslint:disable-next-line: typedef
  getNum(n: string){
    if (n === '.'){
      if (this.decimalSet){
        return;
      }
      this.decimalSet = true;
    }
    this.calculation += n;
    this.operatorSet = false;
    this.currentNum = n;
    console.log(this.calculation);
  }

  // tslint:disable-next-line: typedef
  getOperator(n: string){
    if (this.operatorSet){
      return;
    }
    this.calculation += n;
    this.operatorSet = true;
    this.decimalSet = false;
    //console.log(n);
  }

  // tslint:disable-next-line: typedef
  clearDisplay(){
    this.calculation = '';
    this.total = '';
    this.operatorSet = false;
    //console.log(this.calculation);
  }

  // tslint:disable-next-line: typedef
  getAnswer(){
    // tslint:disable-next-line: no-eval
    this.total = eval(this.calculation);
    this.resultService.createResult(this.calculation)
        .then(res => {
          console.log(res);
        });
    console.log(this.resultList);
  }

  getResults = () =>
    this.resultService
    .getResults()
    .subscribe(res => (this.resultList = res))

}

