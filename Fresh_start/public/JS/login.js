var $txtName=$("input:text");
var $txtPwd=$("input:password");
//为其绑定失去焦点事件: 
$txtName.blur(function(){
	vali($(this),3,9,"用户名必须介于3~9位之间!");
});
function vali($txt,minlen,maxlen,msg){
	//验证当前文本框的内容长度
	var len=$txt.val().length;
	if(len>=minlen&&len<=maxlen){//如果长度>=最小长度且长度<=最大长度,就找到当前文本框的下一个兄弟span，设置其内容
		$txt.next().html(`<img src='./image/img2/zq.png'>`);
		return true;
	}else{//否则,找到当前文本框的下一个兄弟span，设置其内容
		$txt.next().html(`<img src='./image/img2/cw2.png'>${msg}`);
		return false;
	}
}
$txtPwd.blur(function(){
	vali($(this),6,8,"密码必须介于6~8位之间!");
});
//查找表单，为其绑定submit事件
$(".tworeg>.log>form").submit(function(e){
	//获得两个文本框的验证结果
	var rName=vali($txtName,3,9,"用户名必须介于3~9位之间!");
	var rPwd=vali($txtPwd,6,8,"密码必须介于6~8位之间!");
	//如果两个不都是true
	if(!(rName&&rPwd))
		e.preventDefault()//阻止提交！
});