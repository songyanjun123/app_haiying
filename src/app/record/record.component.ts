import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent implements OnInit {
  public dataList:any;
  public getUser:any;
  public pindex:number=1;
  public nullArr:any[]= [];
  constructor( public service:AccountService ) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.service.GetUserCash({ __userid:this.getUser.Id,__pindex:this.pindex }).then(Response=>{
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
      for(let item in this.dataList){
        this.nullArr.push(this.dataList[item]);
      }
    })
  }

  ngOnInit() {

  }
  getMore(){
    this.pindex++;
    this.service.GetUserCash({ __userid:this.getUser.Id,__pindex:this.pindex }).then(Response=>{
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
      if(this.dataList == ''){
        alert("没有更多数据了！");
      }else{
        for(let item in this.dataList){
          this.nullArr.push(this.dataList[item]);
        }
      }
      
    });
  }
}
