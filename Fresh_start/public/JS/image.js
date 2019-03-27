/*周期性定时器*/
  // 1.定义任务函数
  function task(){
    // 查找class为show的当前img
    var img=document.getElementsByClassName("show")[0];
    // 将当前img的class清除
    img.className="";
    // 如果当前img下有一个兄弟元素
    if(img.nextElementSibling!==null){
      // 才设置当前img的下个兄弟的class为show
      img.nextElementSibling.className="show"
    // 否则
    }else{
      // 设置当前img的父元素的第一个孩子的class为show
      img.parentNode.children[0].className="show";
    }
  }
  // 2.启动定时器
  var n=setInterval(task,3000);
  // 3.停止定时器 
  // 查找id为slider的div容器元素
  var div=document.getElementById("slider");
  // 当鼠标进入时
  div.onmouseover=function(){
    clearInterval(n); //停止定时器
  }
  // 当鼠标移除div时
  div.onmouseout=function(){
    // 重新启动定时器
    n=setInterval(task,3000);
  }