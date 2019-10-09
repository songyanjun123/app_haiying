import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { InviteComponent} from './invite/invite.component';
import { NavtabComponent } from './navtab/navtab.component';/*关于我们*/
import { MyCenterComponent} from './my-center/my-center.component';
import { NewsListComponent} from './newslist/newslist.component';
import { NewsdetailComponent} from './newsdetail/newsdetail.component';
import { TixianComponent } from './tixian/tixian.component';
import { RecordComponent } from './record/record.component';
import { ProfitComponent } from './profit/profit.component';
import { HistroyComponent } from './histroy/histroy.component';/*浏览记录*/
import { FovComponent } from './fov/fov.component';/*我的收藏*/
import { CommonComponent } from './common/common.component';/*我的评论*/
import { AboutComponent } from './about/about.component';/*关于我们*/
import { LoginComponent } from './login/login.component'; //登陆
import { RegisterComponent } from './register/register.component';//注册
import { ForgetPasswordComponent } from './forget-password/forget-password.component';//忘记密码
import { UsermoneyComponent } from './usermoney/usermoney.component';
import { ProblemComponent } from './problem/problem.component';
import { RuleComponent } from './rule/rule.component';
import { BinDingWxComponent } from './bin-ding-wx/bin-ding-wx.component';
import { Invite2Component } from './invite2/invite2.component';
import { ContactUsComponent } from './contact-us/contact-us.component';//联系我们
import { AddetailComponent } from './addetail/addetail.component';
import { NewsDetailTuiComponent } from './news-detail-tui/news-detail-tui.component';
const routes: Routes = [
	{
		path:"newslist",component:NewsListComponent//
	},{
		path:"invite",component:InviteComponent//邀请好友页面
	},{
		path:"my-center",component:MyCenterComponent //我的中心页面
	},{
		path:"newslist/:id",component:NewsListComponent//新闻列表页面
	},{
		path:"newsdetail/:id",component:NewsdetailComponent//新闻详情页面
	},{
		path:"newsdetail",component:NewsdetailComponent//新闻详情页面
	},{
		path:"addetail/:id",component:AddetailComponent//新闻详情页面
	},{
		path:"newsdetailtui/:id",component:NewsDetailTuiComponent//新闻详情页面
	},{
		path:"addetail",component:AddetailComponent//新闻详情页面高级文
	},{
		path:"tixian",component:TixianComponent//提现
	},{
		path:"record",component:RecordComponent//提现记录
	},{
		path:"profit",component:ProfitComponent//我的收益
	},{
		path:"histroy",component:HistroyComponent//浏览记录
	},{
		path:"fov",component:FovComponent//我的收藏
	},{
		path:"common",component:CommonComponent//我的评论
	},{
		path:"about",component:AboutComponent//关于我们
	},{
		path:"tixian",component:ProfitComponent //提现页面
	},{
		path:"problem",component:ProblemComponent //常见问题
	},{
		path:"navtab",component:NavtabComponent //频道
	},{
		path:"navtab/:id",component:NavtabComponent //频道
	},{
		path:"login",component:LoginComponent//登陆
	},{
		path:"reg",component:RegisterComponent//注册
	},{
		path:"forgpass",component:ForgetPasswordComponent//忘记密码
	},{
		path:"usermoney",component:UsermoneyComponent//我的钱包
	},{
		path:"rule",component:RuleComponent//规则
	},{
		path:"bindingWx",component:BinDingWxComponent //绑定微信
	},{
		path:"invite2",component:Invite2Component
	},{
		path:"contact",component:ContactUsComponent //联系我们
	},{
		path: '**', 
		//component:NavtabComponent
		redirectTo:"login"
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
