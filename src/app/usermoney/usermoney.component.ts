import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";//路由模块
import { Urls } from '../Model/model.url';
@Component({
  selector: 'app-usermoney',
  templateUrl: './usermoney.component.html',
  styleUrls: ['./usermoney.component.less']
})
export class UsermoneyComponent implements OnInit {
  public ursl=Urls;
  public getUser:any;
  public nickName:any;
  public userName:any;
  public userImg:any;
  public userMoney:any;
  public DayMoney:any;
  public Money:any;
  public formula:boolean=false;
  constructor( public service:AccountService, private router:Router ) { 
    this.getUser = JSON.parse(localStorage.getItem("user"));
     
    this.nickName = this.getUser.NickName;
    this.userName = this.getUser.UserName;
    this.userImg = this.getUser.UserImg;
    if(this.userImg.indexOf('http://')<0){
      this.userImg = this.ursl.Host+this.userImg;
    }else{
      this.userImg = this.userImg;
    }
    this.service.GetUserMoney({ __userid:this.getUser.Id, __cid:this.getUser.OpenIdClient}).then(Response=>{
      this.userMoney = Response;
      this.userMoney = JSON.parse(this.userMoney.DataJson);
      this.DayMoney = this.userMoney.DayMoney;
      this.Money = this.userMoney.Money;
    })
  }
  ngOnInit() { }

  formulaShow(){
    if(this.formula){
      this.formula=false;
    }else{
      this.formula=true;
    }
  }
}
