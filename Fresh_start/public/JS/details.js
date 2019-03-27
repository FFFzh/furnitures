$(function(){//DOM内容加载后提前执行
$.ajax({
  url:"http://127.0.0.1:3000/user/pro",
  type:"get",
  dataType:"json",//自动JSON.parse()
  // 提前给
  success:function(data){
    console.log(data)
    var html = `<img class="my-big" src="${data[4].md}">
                <ul class="product_ximg" >
                <li class="top_left fa"><a href="#">&lt;</a></li>`
    for(var p of data.slice(4,10)){
      html += `<li><img class="my-small" src="${p.sm}" data-target="${p.md}"></li>`
    }
    html += `<li class="top_right fa"><a href="#">&gt;</a></li>
              </ul>`
    $("#preview").html(html)
    // .css("width",80*data.slice(5,10).length);
    $(".product_img>.product_ximg .my-small").click(function(){
      var $img=$(this);
      //获得当前img上的自定义属性data-target的值
      var src=$img.attr("data-target");
                //.prop()
      //修改到class为my-big的大图片的src属性上
      $(".my-big").attr({src});
                //.attr({src属性:src变量})
                //.attr("src",src);
                //.prop(...)
    })
    if(data.length<=4)
      $("#preview>.product_img>.top_right")
      .addClass("disabled");
    var $ulImgs=$("#preview>ul")
    var moved=0;
    $("#preview>.product_img>.top_right")
    .click(function(){
      var $btnRight=$(this);

    }) 
    }
  })
})
