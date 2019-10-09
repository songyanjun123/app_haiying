import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  public loginData: any;
  public getUser:any;
  public nullArr:any;
  constructor(public service: AccountService, private router:Router) { 
    
  }
  ngOnInit() { 
    this.getUser = JSON.parse(localStorage.getItem("user"));
    /*  自动登陆 */
    if(this.getUser == 'undefined' || this.getUser == undefined ||  this.getUser == null || this.getUser ==''){
      console.log('还未登录');

    }else{
      this.service.Login({uname:this.getUser.Phone,upwd:this.getUser.OpenIdClient,utype:'1'}).then(Response => {
        this.router.navigateByUrl("navtab");
      })
    }
  }
  login() {
    let userName: any = document.getElementById("userName");
    userName = userName.value;
    let passWord: any = document.getElementById("passWord");
    passWord = passWord.value;
    this.service.Login({ uname: userName, upwd: passWord }).then(Response => {
     this.loginData = Response;
     this.nullArr =  JSON.parse(this.loginData.DataJson);
      if(this.loginData.Code == 1){
        /* 绑定微信  */
        /*if(this.nullArr.WeiXinId == "" || this.nullArr.WeiXinId == null || this.nullArr.WeiXinId == undefined ||this.nullArr.WeiXinId == "undefined"){
          this.router.navigateByUrl("bindingWx");
        }else{
          localStorage.setItem('user',this.loginData.DataJson);
          this.router.navigateByUrl("navtab");
        }*/
        localStorage.setItem('user',this.loginData.DataJson);
        this.initAppInfo();
        this.router.navigateByUrl("navtab");
      }else{
        alert(this.loginData.Msg);
      }
    });
  }
  initAppInfo(){
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.service.GetAppSett({
      __userid:this.getUser.Id,
      __keys:"qqshangwu,TxWeiXin,KFQQ,qqQunNum",
    }).then(Response =>{
      let resInfo:any;
      let appInfo:any;
      resInfo=Response;//返回的结果 
      if(resInfo.Code==1){
        appInfo=JSON.parse(resInfo.DataJson);
        // console.log(nullObj);
        localStorage.setItem("appInfo",resInfo.DataJson);
      }else{
        alert(resInfo.Msg);
      }
    })
  }
}