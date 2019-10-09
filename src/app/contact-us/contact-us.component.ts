import { Component, OnInit } from '@angular/core';  
import {AccountService} from '../app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less'] 
})
export class ContactUsComponent implements OnInit {
  public getUser:any;
  public resInfo:any;
  public appInfo:any;
  public swqq:any;
  public kfqq:any;
  public kfqQunNum:any;
  // public kfqqQunImg:string='';
  public txWxNum:any; 
  constructor(public service:AccountService) { 
    //获取用户信息
    this.getUser=localStorage.getItem("user");
    this.getUser=JSON.parse(this.getUser);
    this.swqq=this.GetAppInfoByKey("qqshangwu");
    this.kfqq = this.GetAppInfoByKey("KFQQ"); 
    // this.kfqqQunImg = this.GetAppInfoByKey("qqQun");
    this.txWxNum = this.GetAppInfoByKey("TxWeiXin");
    this.kfqQunNum = this.GetAppInfoByKey("qqQunNum");
  }

  ngOnInit() {}
  GetAppInfoByKey(key) {
		var djson = localStorage.getItem("appInfo");
		djson = localStorage.getItem("appInfo");
		var dlist = JSON.parse(djson);
		for(var i = 0; i < dlist.length; i++) {
			var o = dlist[i];
			if(o.Key == key) {
				return o.Value;
			}
		}
		return "";
	};
}
