// 视频
window.onload=function(){
  // 获取父元素
  var vdo = document.querySelector(".vdo");
  var ad = document.querySelector(".ad");
  var ctrl = document.querySelector(".ctrl");
  var img = document.querySelector(".ctrl img");
  var mask = document.getElementById("mask");

  // 2.为父元素绑定点击事件
  ctrl.onclick = function(e){
    e.preventDefault();
    console.log(111);  
  }
  // ctrl图片 ad视频
  ctrl.onclick = function(){
    mask.style.display = "block";
    ad.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  mask.onclick = function(){
    mask.style.display="none";
    ad.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
