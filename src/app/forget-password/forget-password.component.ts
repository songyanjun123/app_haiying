import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.less']
})
export class ForgetPasswordComponent implements OnInit {
  public regData:any;
  public flag:boolean=false;
  public isLogin:boolean=false;
  public phone:any;
  public passWord:any;
  public regPassWord:any;
  public code:any;
  public dataJson:any;
  constructor(public service:AccountService, private router:Router) { 
   
  }

  ngOnInit() {}
  getCode(){
    this.phone = document.getElementById("userName");
    this.phone = this.phone.value;
    this.passWord = document.getElementById("password");
    this.passWord =  this.passWord.value;
    this.regPassWord = document.getElementById("regPassWord");
    this.regPassWord =  this.regPassWord.value;
    
    if( this.phone == ""){
      alert("手机号不能为空");
      this.flag = false;
    }else{
      this.flag = true;
    }
    if(this.flag){
      this.service.SendSms({ phone: this.phone, hurl:"",curl:"",typeid:1,userid:"" }).then(Response => {
        this.regData = Response;
          if(this.regData.Code == 1){
            console.log(this.regData.Msg);
            settime("");
          }else{
            alert(this.regData.Msg);
          }
       });
    }
  }
  changePass(){
    this.phone = document.getElementById("userName");
    this.phone = this.phone.value;
    this.passWord = document.getElementById("password");
    this.passWord =  this.passWord.value;
    this.regPassWord = document.getElementById("regPassWord");
    this.regPassWord =  this.regPassWord.value;
    this.code =  document.getElementById("codeNum");
    this.code =  this.code.value;
    if( this.phone == ""){
      alert("手机号不能为空");
      this.flag = false;
      return false;
    }else{
      this.flag = true;
    }
    if(this.passWord == ""){
      alert("密码不能为空");
      this.flag = false;
      return false;
    }else{
      this.flag = true;
    }
    if(this.regPassWord == ""){
      alert("密码不正确请重新输入");
      this.flag = false;
      return false;
    }else{
      this.flag = true;
    }
    if(this.code == ""){
      alert("验证码不能为空");
      this.flag = false;
      return false;
    }else{
      this.flag = true;
    }
    this.service.RePwd({phone:this.phone,upwd:this.passWord,code:this.code}).then(Response => {
      this.dataJson = Response;
      if(this.dataJson.Code == 1){
        this.dataJson =  JSON.parse(this.dataJson.DataJson);
        this.router.navigateByUrl('login');
      }else{
        alert(this.dataJson.Msg);
      }
      
      
    })
  }
}
//验证码倒计时
let countdown = 60;
function settime(val) {
  if(countdown == 0) {
    document.getElementById("getCode").innerHTML = "获取验证码";
    countdown = 60;
  } else {
    document.getElementById("getCode").innerHTML = "重新发送(" + countdown + ")";
    countdown--;
    setTimeout(function() {
      settime(val);
    }, 1000);
  }
}
