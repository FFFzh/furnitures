// 商品数量加1

// 1.查找触发事件的元素
// 查找div id为data
var div=document.getElementById("data");
// 查找div下所有的span
var btns=div.getElementsByTagName("span");
console.log(btns);

// 遍历btns中每个找到的btn
for(var btn of btns){
  btn.onclick=function(){
    var btn=this;
    var span=btn.parentNode.children[1];
    // span.innerHTML="❤";
    var n=parseInt(span.innerHTML);
    if(btn.innerHTML=="+"){
      n++;
    }else if(n>1){
      n--;
    }
    span.innerHTML=n;
  }
}