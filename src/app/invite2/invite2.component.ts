import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-invite2',
  templateUrl: './invite2.component.html',
  styleUrls: ['./invite2.component.less']
})
export class Invite2Component {
  public item: number = 0;
  public getUser:any;
  public userFans:any;
  public dataList:any;
  public userCount:any;
  public userMoney:any;
  public inviteLink:any;
  public isShowNoFriend:boolean=false;
  public isShowShare:boolean=false;
  public wechatFriend:any;
  public wechatTimeline:any;
  public xitong:any;
  public showShareImgUrl:any;
  constructor(public service: AccountService) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.userMoney = this.getUser.Money;
    this.service.GetFans({__userid:this.getUser.Id,__pindex:1}).then(Response => {
      this.userFans = Response;
        if(JSON.parse(this.userFans.DataJson)  == ''){
          this.isShowNoFriend = true;
          this.userCount = 0;
        }else{
          this.isShowNoFriend = false;
          this.dataList = JSON.parse(this.userFans.DataJson);
          this.userCount = this.dataList.length;
        }
    });
    this.service.GetInvteInfo({__userid:this.getUser.Id,__usercode:this.getUser.UserCode}).then( Response =>{
      let dataJson:any=Response;
      if(dataJson.Code == 1){
        dataJson = JSON.parse(dataJson.DataJson);
        let inviteSortUrl:any=dataJson.SortUrl;
        let inviteTitle:any=dataJson.Title;
        let inviteTitleImg:any=dataJson.TitleImg;
        let inviteQc:any=dataJson.QcodeUrl;
        let inviteUrl:any = dataJson.Url;
        this.inviteLink = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatFriend&url='+inviteSortUrl+'&title='+inviteTitle+'&img='+inviteTitleImg+'&desc='+inviteTitle;
        this.wechatFriend = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatFriend&url='+inviteSortUrl+'&title='+inviteTitle+'&img='+inviteTitleImg+'&desc='+inviteTitle;
        this.wechatTimeline = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatTimeline&url='+inviteSortUrl+'&title='+inviteTitle+'&img='+inviteTitleImg+'&desc='+inviteTitle;
        this.xitong = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=xitong&url='+inviteSortUrl+'&title='+inviteTitle+'&img='+inviteTitleImg+'&desc='+inviteTitle;
        this.showShareImgUrl = inviteQc;
        $("#inviteBtn").attr("href", this.inviteLink);
        $("#weixinF").attr("href",this.wechatFriend);
        $("#pengyou").attr("href",this.wechatTimeline);
        $("#xitong").attr("href",this.xitong);
       // $("#inviteBotBtn").attr("href", this.inviteLink);
      }else{
        console.log("邀请好友信息加载me成功");
      }
    });
  }
  inviteTab(value){
    this.item=value;
  }
  showShare(){
		if(this.isShowShare){
			this.isShowShare = false;
			this.shareReg('mttbrowser://');
		}else{
			this.isShowShare = true;
			//this.shareReg('mttbrowser://http://a.68weitang.cn/h2/sharetset/nativeShare/demo.html');
		}
  }
  showShareImg(){
    if(this.isShowShare){
      this.isShowShare = false;
      $("#showInviteQc").show();
		}else{
			this.isShowShare = true;
		}
  }
  toggleQcImg(){
    $("#showInviteQc").hide();
  }
  shareReg(url) {
		var timeout, t = 1000, hasApp = true;
		setTimeout(function () {
			if (hasApp) {
				//alert('安装了app');
			} else {
				alert('请先下载QQ浏览器后再分享');
			}
			document.body.removeChild(ifr);
		}, 2000);
	
		var t1 = Date.now();
		var ifr = document.createElement("iframe");
		ifr.setAttribute('src', url);
		ifr.setAttribute('style', 'display:none');
		document.body.appendChild(ifr);
		timeout = setTimeout(function () {
			 var t2 = Date.now();
			 if (!t1 || t2 - t1 < t + 100) {
				 hasApp = false;
			 }
		}, t);
	}
}
