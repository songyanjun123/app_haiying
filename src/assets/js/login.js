(function($){
    $.ready(function(){
        let mshare = new mShare({
			title: 'Lorem ipsum dolor sit.',
			url: 'www.baidu.com',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat inventore minima voluptates.',
			img: 'http://placehold.it/150x150'
		});
		var otem = getQueryString('id');
		// 1 ==> 朋友圈  2 ==> 朋友  0 ==> 直接弹出原生
		mshare.init(otem);
    });
})(mui);
mui.pulsReady = function(){
    plus.share.getServices(function(s){
        shares = s;
        alert(shares);
	}, function(e){
		alert("获取分享服务列表失败："+e.message);
	});
}
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); 
	return null; 
}