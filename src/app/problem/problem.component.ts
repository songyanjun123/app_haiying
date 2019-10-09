import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块


@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.less']
})
export class ProblemComponent implements OnInit {
  public dataList:any;
  public getUser:any;
  public item: number = 0;
  public showItem1:number=0;
  public showItem2:number=1;
  public showItem3:number=0;
  constructor( public service:AccountService ) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.service.GetUserQuestion({ __userid:0,__groupid:4,__pindex:1 }).then(Response=>{
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
    })
  }
  ngOnInit() {  }
  tabProblem(item){
    this.item = item;
  }
  showItem(){
    if(this.showItem1 == 0){
      this.showItem1 = 1;

    }else{
      this.showItem1 = 0;

    }
  }
  showItemB(){
    if(this.showItem2 == 0){
      this.showItem2 = 1;

    }else{
      this.showItem2 = 0;

    }
  }
  showItemC(){
    if(this.showItem3 == 0){
      this.showItem3 = 1;

    }else if(this.showItem3 == 1){
      this.showItem3 = 2;

    }else if(this.showItem3 == 2){
      this.showItem3 = 0;
    }
  }
}