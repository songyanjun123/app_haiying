import { Component, OnInit, Input, Output, EventEmitter,ViewChild, OnDestroy, AfterViewInit, Directive, HostListener } from '@angular/core';
/*使用rxjs*/
import { ActivatedRoute } from '@angular/router';//接收动态传值
import { AccountService } from '../app.service';  //引用service模块
import { ScrollServiceService } from '../scroll.service';//引用滚动服务
import { fromEvent } from 'rxjs';
import * as $ from 'jquery';

@Component({
	selector: 'app-newslist',
	templateUrl: './newslist.component.html',
	styleUrls: ['./newslist.component.less']
})
export class NewsListComponent implements OnInit {
	public productId: number = 1;
	private pageIndex: number;
	public NewsListDataList: any;
	public timer;
	//public subscribeScoll: any;
	public flag: boolean = false;
	public nullArr:any[]=[];
	public subscribeScoll: any;
	public testInput:any;
	//接受父组件传值
	@Input() type: any;
	@Output() output = new EventEmitter();
	ngOnInit(): void { }
	constructor(public service: AccountService,  private route: ActivatedRoute,  ) {//,scrollService:ScrollServiceService
		this.timer = setTimeout(() => {//设置定时刷新事件，每隔5秒刷新
			this.productId = this.route.snapshot.queryParams['id'];
			this.NewsListDataList = null;
			this.pageIndex = 1;
			service.GetArticles({ __userid: 0, __channelid: this.productId, __pindex: this.pageIndex, __psize: 10, __atid: 0 }).then(res => {
				this.NewsListDataList = eval('JSON.parse(res.DataJson)');
				for(let item in this.NewsListDataList){
					this.nullArr.push(this.NewsListDataList[item]);
				}
			});
			this.pageIndex++;
		}, 100);
	}
	ngOnDestroy() {
		if (this.timer) {
			clearInterval(this.timer);
		}
	}
	@HostListener('window:scroll', ['$event'])  public onScroll = ($event) =>{
		let clientH:any = document.documentElement.clientHeight;//客户端高度
		let bodyH:any = document.body.clientHeight;//body高度
		let scrollTop:any = document.body.scrollTop || document.documentElement.scrollTop;//滚动的高度
		
		this.testInput = bodyH - clientH - scrollTop +'~bodyH'+bodyH+'~clientH'+clientH+'~scrollTop'+scrollTop;
		//滚动到底部60以内
		if (bodyH - clientH - scrollTop < 20) {
			if (!this.flag) {
				this.loadData();
			}
			this.flag = true;
		} else {
			this.flag = false;
		}
	}
	loadData(){
		this.service.GetArticles({ __userid: 0, __channelid: this.productId, __pindex: this.pageIndex, __psize: 10, __atid: 0 }).then(res => {
			this.NewsListDataList = eval('JSON.parse(res.DataJson)');
			window.scrollTo(0,0);
			for(let item in this.NewsListDataList){
				this.nullArr.push(this.NewsListDataList[item]);
			}
		});
		this.pageIndex++;
	}
}
