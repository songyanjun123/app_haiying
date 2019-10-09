import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';  /*数据请求模块*/
import { HttpClientModule } from '@angular/common/http';  /*数据请求模块*/

import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; //引用路由模块 
import { AppComponent } from './app.component'; 


/* 引用service模块 */
import {AccountService} from './app.service';

/* 引用页面模块 */
import { NewsListComponent } from './newslist/newslist.component';/*新闻列表*/
import { InviteComponent } from './invite/invite.component';/*邀请好友*/
import { MyCenterComponent } from './my-center/my-center.component';/*我的中心*/
import { TixianComponent } from './tixian/tixian.component';/*提现页面*/
import { NavtabComponent } from './navtab/navtab.component';/*频道信息*/
import { NewsdetailComponent } from './newsdetail/newsdetail.component';/*新闻详情*/
import { RecordComponent } from './record/record.component';/*提现记录*/
import { ProfitComponent } from './profit/profit.component';/*我的收益*/
import { HistroyComponent } from './histroy/histroy.component';/*浏览记录*/
import { FovComponent } from './fov/fov.component';/*我的收藏*/
import { CommonComponent } from './common/common.component';/*我的评论*/
import { AboutComponent } from './about/about.component';/*关于我们*/
import { ProblemComponent } from './problem/problem.component';
import { FootnavComponent } from './footnav/footnav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UsermoneyComponent } from './usermoney/usermoney.component';
import { RuleComponent } from './rule/rule.component';
import { BinDingWxComponent } from './bin-ding-wx/bin-ding-wx.component';
import { Invite2Component } from './invite2/invite2.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddetailComponent } from './addetail/addetail.component';
import { NewsDetailTuiComponent } from './news-detail-tui/news-detail-tui.component';







@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    InviteComponent,
    MyCenterComponent,
    NavtabComponent,
    NewsdetailComponent,
    TixianComponent,
    RecordComponent,
    ProfitComponent,
    HistroyComponent,
    FovComponent,
    CommonComponent,
    AboutComponent,
    ProblemComponent,
    FootnavComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    UsermoneyComponent,
    RuleComponent,
    BinDingWxComponent,
    Invite2Component,
    ContactUsComponent,
    AddetailComponent,
    NewsDetailTuiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  entryComponents:[
  	NavtabComponent
  ],
  providers: [
  	AccountService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
