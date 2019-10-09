import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-tixian',
  templateUrl: './tixian.component.html',
  styleUrls: ['./tixian.component.less']
})
export class TixianComponent implements OnInit {
  //userNickName 用户名 userWxName 微信号
  public item: number = 0;
  public moneyData:any=5;
  public getUser:any;
  public userNickName:any;
  public userWxName:any;
  public dataList:any;
  constructor(public service: AccountService,private route:Router) { 
    this.getUser = JSON.parse(localStorage.getItem("user"));
  }
  ngOnInit() {
  }
  clickMoney(data,item){
    this.item = item;
    this.moneyData = data;
  }
  submitMoney(){
    this.userNickName=document.getElementById("userNickName");
    this.userNickName = this.userNickName.value;
    this.userWxName=document.getElementById("userWxName");
    this.userWxName = this.userWxName.value;
    if(this.userNickName == ""){
      alert("请输入用户名");
      return false;
    }
    if(this.userWxName == ""){
      alert("请输入微信号");
      return false;
    }
    this.service.AddUserCash({ __userid:this.getUser.Id,__cashtype:0,__realname:this.userNickName,__idnumber:this.userWxName,__cashcount:this.moneyData }).then(Response =>{
      this.dataList = Response;
      if(this.dataList.Code == 1){
        alert(this.dataList.Msg);
        this.dataList = JSON.parse(this.dataList.DataJson);
      }else{
        alert(this.dataList.Msg);
      }
    })
  }
}
