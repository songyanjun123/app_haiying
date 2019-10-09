import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  public userInfo:any;
  public regData:any;
  public flag:boolean=false;
  public isLogin:boolean=false;
  public phone:any;
  public passWord:any;
  public regPassWord:any;
  public code:any;

  constructor( public service: AccountService, private router:Router ) { 

  }

  ngOnInit() { }


  getCode(){
    
    this.userInfo = localStorage.getItem("user");
    this.phone = document.getElementById("userName");
    this.phone = this.phone.value;
    this.passWord = document.getElementById("passWord");
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
      this.service.SendSms({ phone: this.phone, hurl:"",curl:"reg.html",typeid:0,userid:"" }).then(Response => {
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
  reg(){
    this.code = document.getElementById("code");
    this.code = this.code.value;
    if(this.phone == ''){
      alert("手机号不能为空");
      this.isLogin = false;
    }else{
      this.isLogin = true;
    }
    if(this.passWord == ''){

      alert("密码不能为空");
      this.isLogin = false;
    }else{
      this.isLogin = true;
    }
    if(this.regPassWord == ''){
      alert("密码不能为空");
    }else{
      this.isLogin = true;
    }
    if(this.code == ''){
      alert("请输入验证码");
    }else{
      this.isLogin = true;
    }
    if(this.isLogin){
      this.service.RegUser({ phone: this.phone, scode:this.code,password:this.regPassWord}).then(Response => {
        this.regData = Response;
          if(this.regData.Code == 1){
            localStorage.setItem("userPhone",this.phone);
            this.router.navigateByUrl('login');
          }else{
            console.log(this.regData.Msg);
          }
       });
    }
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