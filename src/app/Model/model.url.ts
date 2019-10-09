
// const host = 'http://sdk.54weitang.cn/'; 
const host = 'http://hyapp.52weitang.cn/'; // service url  http://sdk.54weitang.cn/
 
/* common url  */
export const Urls = {
  Host:'http://hyapp.52weitang.cn/',
  GetChannels: host + 'ServicesV2/GetChannels.ashx', // 获取频道信息
  GetArticles: host + 'ServicesV2/GetArticles.ashx', // 新闻列表
  GetArticle: host + 'ServicesV2/GetArticle.ashx', // 新闻详情
  Login: host + 'ServicesV2/Login.ashx', // 登陆
  RegUser: host + 'ServicesV2/RegUser.ashx', // 新闻详情
  SendSms: host + "ServicesV2/SendSms.ashx", //发送短信
  GetFans: host+"ServicesV2/GetFans.ashx",//获取好友用户信息
  GetInvteInfo: host+"ServicesV2/GetInvteInfo.ashx",//获取邀请好友信息
  GetUserMoney: host + "ServicesV2/GetUserMoney.ashx", //用户余额
  GetUserCash: host + "ServicesV2/GetUserCash.ashx", //获取用户提现信息
  GetUserCommisions: host + "ServicesV2/GetUserCommisions.ashx", //获取用户佣金列表
  GetAppHistory: host + "ServicesV2/GetAppHistory.ashx",//获取APP浏览历史列表
  GetUserFavs: host + "ServicesV2/GetUserFavs.ashx",//收藏
  GetUserComment: host + "ServicesV2/GetUserComment.ashx", //获取评论列表
  GetUserQuestion: host + "ServicesV2/GetUserQuestion.ashx", //常见问题
  RePwd: host + "ServicesV2/RePwd.ashx", //找回密码
  AddUserCash: host + "ServicesV2/AddUserCash.ashx",//用户提交提现
  AddComment: host + "ServicesV2/AddComment.ashx", //添加评论
  GetAppReader: host + "ServicesV2/GetAppReader.ashx", //APP阅读任务
  GetAddFav: host + "ServicesV2/GetAddFav.ashx", //添加收藏
  GetAppSett: host+"ServicesV2/GetAppSett.ashx",//联系我们 
};
