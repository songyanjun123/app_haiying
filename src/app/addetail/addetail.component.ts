import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras,Params ,ActivatedRoute} from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-addetail',
  templateUrl: './addetail.component.html',
  styleUrls: ['./addetail.component.less']
})
export class AddetailComponent implements OnInit {
  public getUser:any;
  public attrid:any;
  public nullObject : any;
  public wechatFriend:any;
  public wechatTimeline:any;
  public title:any;
  public ShareUrl:any;
  public shareImg:any;
  constructor(private service: AccountService,router: Router,activatedRoute: ActivatedRoute) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
		activatedRoute.params.subscribe((params: Params) => {
			this.attrid = params['id'];
    });
    service.GetArticle({__userid:this.getUser.Id ,__articleid:this.attrid}).then(Response => {
      this.nullObject = eval('JSON.parse(Response.DataJson)');
      this.title = this.nullObject.Title;
      this.ShareUrl = this.nullObject.ShareUrl;
			this.shareImg = this.nullObject.TitleImg;
      this.wechatFriend = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatFriend&url='+this.ShareUrl+'&title='+this.title+'&desc='+this.title+'&img='+this.shareImg;
			this.wechatTimeline = 'mttbrowser://http://share.52weitang.cn/ShareModel/index.html?to=wechatTimeline&url='+this.ShareUrl+'&title='+this.title+'&desc='+this.title+'&img='+this.shareImg;
      $("#weixinA").attr("href",this.wechatFriend);
			$("#pengyouA").attr("href",this.wechatTimeline);
    })
  }

  ngOnInit() {
  }

}
