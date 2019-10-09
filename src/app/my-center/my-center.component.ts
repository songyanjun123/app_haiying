import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";//路由模块
import { Urls } from '../Model/model.url';
@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.less']
})
export class MyCenterComponent implements OnInit {
  public getUser: any;
  public nickName: any;
  public userName: any;
  public userImg: any;
  public userMoney: any;
  public DayMoney: any;
  public Money: any;
  public ursl = Urls;
  constructor(public service: AccountService, private router: Router) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.nickName = this.getUser.NickName;
    this.userName = this.getUser.UserName;
    this.userImg = this.getUser.UserImg;
    if (this.userImg.indexOf('http://') < 0) {
      this.userImg = this.ursl.Host + this.userImg;
    } else {
      this.userImg = this.userImg;
    }
    this.service.GetUserMoney({ __userid: this.getUser.Id, __cid: this.getUser.OpenIdClient }).then(Response => {
      let dataJson:any = Response;
      if (dataJson.Code == 1) {
        this.userMoney = JSON.parse(dataJson.DataJson);
        this.DayMoney = this.userMoney.DayMoney;
        this.Money = this.userMoney.Money;
      } else if(dataJson.Code == 0) {
        alert(dataJson.Msg);
        this.router.navigateByUrl("login");
        localStorage.clear();
      }

    })
  }

  ngOnInit() { }
}

