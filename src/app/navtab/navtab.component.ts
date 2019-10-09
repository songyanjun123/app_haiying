import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';//引用http模块
/* 路由 */
import { Router, NavigationExtras } from "@angular/router";
import { NewsListComponent } from '../newslist/newslist.component';/*新闻列表*/
import { AccountService } from '../app.service';  //引用service模块



@Component({
	selector: 'app-navtab',
	templateUrl: './navtab.component.html',
	styleUrls: ['./navtab.component.less'],
})
export class NavtabComponent {
	navDataList: any[];
	public noShowCon:boolean=true;
	ngOnInit(): void {
		this.navDataList = null;
	}

	componentRef: ComponentRef<NewsListComponent>;

	@ViewChild("newsContent", { read: ViewContainerRef }) container: ViewContainerRef;
	@ViewChild("newsListCon") newsCon: any;
	constructor(private resolver: ComponentFactoryResolver, service: AccountService, router: Router) {
		service.GetChannels({ uid: 0 }).then(Response => {
			this.navDataList = eval('JSON.parse(Response.DataJson)');
		});
	}
	createComponent(type: string) {
		this.container.clear();
		this.noShowCon = false;
		const factory: ComponentFactory<NewsListComponent> =
			this.resolver.resolveComponentFactory(NewsListComponent);
		this.componentRef = this.container.createComponent(factory);
		this.componentRef.instance.type = type;
		this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
	}
	ngOnDestroy() {
		//this.componentRef.destroy();
	}
}
