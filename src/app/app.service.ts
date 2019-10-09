import { Injectable } from '@angular/core'; 
import { Urls } from './Model/model.url';

/*使用http模块  要在app module引入http模块*/
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 

import { Result } from './Model/model.result'; /*返回结果的模块*/
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private urls = Urls;

  //private http = Http;
  constructor(private http: Http) { }
  Login(data): Promise<Result> {//登陆
    return this.get(this.urls.Login, data);
  }
  RegUser(data): Promise<Result> {//注册
    return this.get(this.urls.RegUser, data);
  }
  SendSms(data): Promise<Result> {//获取短信验证码
    return this.get(this.urls.SendSms, data);
  }
  GetChannels(data): Promise<Result> {/*频道信息*/
    return this.get(this.urls.GetChannels, data);
  }
  GetArticles(data): Promise<Result> {//新闻列表
    return this.get(this.urls.GetArticles, data);
  }
  GetArticle(data): Promise<Result> {//新闻详情
    return this.get(this.urls.GetArticle, data);
  }
  GetFans(data):Promise<Result>{//获取用户粉丝信息
    return this.get(this.urls.GetFans, data);
  }
  GetInvteInfo(data):Promise<Result>{//获取邀请好友信息
    return this.get(this.urls.GetInvteInfo,data);
  }
  GetUserMoney(data): Promise<Result> {//用户余额 
    return this.get(this.urls.GetUserMoney, data);
  }
  GetUserCash(data): Promise<Result> {//用户提现列表
    return this.get(this.urls.GetUserCash, data);
  }
  GetUserCommisions(data): Promise<Result> {//收益明细
    return this.get(this.urls.GetUserCommisions, data);
  }
  GetAppHistory(data): Promise<Result> {//浏览记录
    return this.get(this.urls.GetAppHistory, data);
  }
  GetUserFavs(data): Promise<Result> {//收藏
    return this.get(this.urls.GetUserFavs, data);
  }
  GetUserComment(data): Promise<Result> {//评论
    return this.get(this.urls.GetUserComment, data);
  }
  GetUserQuestion(data): Promise<Result> {//常见问题
    return this.get(this.urls.GetUserQuestion, data);
  }
  RePwd(data): Promise<Result> {//找回密码
    return this.get(this.urls.RePwd, data);
  }
  AddUserCash(data): Promise<Result> {//提交提现
    return this.get(this.urls.AddUserCash, data);
  }
  AddComment(data): Promise<Result> {//添加评论
    return this.get(this.urls.AddComment, data);
  }
  GetAppReader(data): Promise<Result> {//阅读奖励
    return this.get(this.urls.GetAppReader, data);
  }
  GetAddFav(data): Promise<Result> {//添加收藏
    return this.get(this.urls.GetAddFav, data);
  }
  GetAppSett(data):Promise<Result>{//联系我们
    return this.get(this.urls.GetAppSett,data);
  }
  
  // 对get请求进行封装
  private get(url: string, data: URLSearchParams = null): Promise<Result> {
    return this.http.get(url, { search: data })
      .toPromise().then(r => r.json() as Result)
      .catch(this.handleError);
  }
  // 对post请求进行封装
  private post(url: string, data: any): Promise<Result> {
    return this.http.post(url, data)
      .toPromise().then(r => r.json() as Result)
      .catch(this.handleError);
  }
  // 捕获异常并输出
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
