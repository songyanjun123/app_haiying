import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.less']
})
export class InviteComponent {

  public item: number = 0;
  public getUser:any;
  public userFans:any;
  public dataList:any;
  public userCount:any;
  public userMoney:any;
  constructor(public service: AccountService) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.userMoney = this.getUser.Money;
    //console.log(this.getUser.Id)
    this.service.GetFans({__userid:this.getUser.Id,__pindex:1}).then(Response => {
      this.userFans = Response;
      this.dataList = JSON.parse(this.userFans.DataJson);
      this.userCount = this.dataList.length;
      console.log(this.dataList.length);
      //console.log(this.userFans.DataJson);
    })
  }


  inviteTab(value) {
    this.item = value;
  }

}
