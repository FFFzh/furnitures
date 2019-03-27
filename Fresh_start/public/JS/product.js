
// $(function(){//DOM内容加载后提前执行
//   $.ajax({
//     url:"http://127.0.0.1:3000/user/product",
//     type:"get",
//     dataType:"json",//自动JSON.parse()
//     success:function(data){
//       console.log(data)
//       var html = ""
//       for(var p of data){
//         html += `<li>
//         <a target="_blank" href="product_details.html">
//           <div class="img"><img src="./${p.pic}"></div>
//           <div class="text">
//             <div class="">${p.title}</div>
//             <p>
//               ￥${p.price.toFixed(2)}
//               <del>￥${p.discount.toFixed(2)}</del>
//             </p>
//           </div>
//         </a>
//       </li>`
//       }
//       $(".pro-list>ul").html(html);
//     }
//   })
// })


function loadPage(no=0){
  var pno = no;
  $.ajax({
    url:"http://127.0.0.1:3000/user/product",
    type:"get",
    data: {pno},
    dataType:"json",//自动JSON.parse()
    success:function(data){
      var html = ""
      for(var p of data.products){
        html += `<li>
        <a target="_blank" href="product_details.html">
          <div class="img"><img src="./${p.pic}"></div>
          <div class="text">
            <div class="">${p.title}</div>
            <p>
              ￥${p.price.toFixed(2)}
              <del>￥${p.discount.toFixed(2)}</del>
            </p>
          </div>
        </a>
      </li>`
      }
      $(".pro-list>ul").html(html);

      var html = `<div class="page-prev">
      <i class="fa fa-angle-left"></i>
    </div>`
    for(var i=0; i<data.pageCount;i++){
      html += `<div class="page-item on">${i+1}</div>`
    }
    html += `<div class="page-next">
    <i class="fa fa-angle-right"></i>
  </div>`
  $(".page-cent").html(html)
  $(".page-cent>div").click(function(){
    var $a = $(this)
    if($a.index() == 1){
      loadPage(no=0)
    }else if($a.index() == 2){
      loadPage(no=1)
    }
  })
    }
  })
}loadPage();


