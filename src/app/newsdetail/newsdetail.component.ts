import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';//引用http模块
/*使用rxjs*/
import { Observable } from "rxjs";
import 'rxjs/Rx';
/* 路由 */
import { Router, NavigationExtras,Params ,ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, Validators }   from '@angular/forms';
import { AccountService } from '../app.service';  //引用service模块
import * as $ from 'jquery';




@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.less']
})
export class NewsdetailComponent implements OnInit {
  public newsDetailContent: any[];
  public nullObject : any;
  public title:string='';
  public content:string='';
  public auth:string='';
  public createDate:string='';
  public attrid:any;
  public getUser:any;
  public nullArr:any[]=[];
  public dataList:any;
  public commonList:any[]=[];
  public commonArr:any;
  public userComList:any;
  public isShowNoCom:number=0;
  public txtcomment:any;
  public ShareUrl:any;
  public wechatFriend:any;
  public wechatTimeline:any;
  public xitong:any;
  public shareImg:any;	

  public isShowShare:boolean=false;
  @ViewChild('txtComment') txtComment:ElementRef;
 	ngOnInit(): void {
		this.newsDetailContent = null; 
		this.getUserCom();
		
	}
 	constructor(private service: AccountService,router: Router,activatedRoute: ActivatedRoute) {
		
		this.getUser = JSON.parse(localStorage.getItem("user"));
		activatedRoute.params.subscribe((params: Params) => {
			this.attrid = params['id'];
		});
	 	service.GetArticle({__userid:this.getUser.Id ,__articleid:this.attrid}).then(Response => {
	 		this.nullObject = eval('JSON.parse(Response.DataJson)');
	 		this.title = this.nullObject.Title;
	 		this.content =  html_decode(this.nullObject.Content);
	 		this.auth = this.nullObject.Auth;
			this.createDate = this.nullObject.CreateDate;
			this.ShareUrl = this.nullObject.ShareUrl;
			this.shareImg = this.nullObject.TitleImg;
			this.wechatFriend = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatFriend&url='+this.ShareUrl+'&title='+this.title+'&desc='+this.title+'&img='+this.shareImg;
			this.wechatTimeline = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatTimeline&url='+this.ShareUrl+'&title='+this.title+'&desc='+this.title+'&img='+this.shareImg;
			this.xitong = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=xitong&url='+this.ShareUrl+'&title='+this.title+'&desc='+this.title+'&img='+this.shareImg;
			$("#weixinF").attr("href",this.wechatFriend);
			$("#pengyou").attr("href",this.wechatTimeline);
			$("#xitong").attr("href",this.xitong);
			$("#weixinA").attr("href",this.wechatFriend);
			$("#pengyouA").attr("href",this.wechatTimeline);
		});
		service.GetArticles({__userid:0 ,__articleid:0,__pindex:1,__psize:2}).then(Response => {
			this.dataList = Response;
			if(this.dataList.Code == 1){
				this.dataList = JSON.parse(this.dataList.DataJson);
				for(let item in this.dataList){
					this.nullArr.push(this.dataList[item]);

				}
			}else{
				console.log(this.dataList.Msg);
			}
	   	});
	}
	openAll(){
		document.getElementById("all").style.height = 'auto';
		document.getElementById("allBtn").style.display = "none";
		document.getElementById("jiantou").style.display = "none";
		this.onappreader();
	}
	addfov(){
		this.service.GetAddFav({__userid:this.getUser.Id,__aid:this.attrid}).then(Response => {
			let data:any = Response;
			alert(data.Msg);
		});
	}
	addCom(){
		this.userCom();
		setTimeout(() => {//设置定时刷新事件，每隔5秒刷新
			this.getUserCom();
		}, 100)
	}
	onappreader(){
		this.service.GetAppReader({__articleid:this.attrid,__userid:this.getUser.Id}).then(Response => {
			let data:any = Response;
			console.log(data.Msg);
		});
	}
	userCom(){
		this.txtcomment = document.getElementById('txtcomment');
		if(this.txtComment.nativeElement.value == ''){
			alert("评论内容不能为空！！！");
			return false;
		}else{
			this.txtcomment = this.txtcomment.value;
			this.service.AddComment({uid:this.getUser.Id,aid:this.attrid,desc:this.txtcomment}).then(Response => {
				this.commonArr = Response;
				if(this.commonArr.Code == 1){
					console.log(this.commonArr.Msg);
					this.txtComment.nativeElement.value = '';
				}else{
					alert(this.commonArr.Msg);
				}
			});
		}
		
		
	}
	getUserCom(){
		this.service.GetUserComment({__userid:0,__aid:this.attrid,__pindex:1}).then(Response => {
			this.userComList = Response;
			this.userComList = JSON.parse(this.userComList.DataJson);
			if(this.userComList.length == 0){
				this.isShowNoCom = 0;
			}else{
				this.isShowNoCom = 1;
				this.commonList=this.userComList;
			}
			
		});
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

function html_decode(str){
	if(str == null) return "";
	if(str == "") return "";
	var s = "";
	if(str.length == 0) return "";
	s = str.replace(/&lt;/g, " <");
	s = s.replace(/&gt;/g, ">");
	s = s.replace(/&nbsp;/g, "    ");
	s = s.replace(/'/g, "\'");
	s = s.replace(/&quot;/g, "\"");
	s = s.replace(/<br>/g, "/n");
	//console.log(s)
	return s;
}

