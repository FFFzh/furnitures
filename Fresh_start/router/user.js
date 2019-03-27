//引入上一级目录下的MySQL连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由
var router=express.Router();
//添加路由
router.get("/checkUname",(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
    res.send("用户不存在");
    return;
  }
  var sql="SELECT * FROM yonghu_user WHERE uname=?"
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
//1.用户注册
router.post('/register',(req,res)=>{
  //获取post请求的数据
  // var obj=req.body;
  //判断用户名是否为空
  var $uname=req.body.uname;
  if(!$uname){
    res.send("用户名不存在");
    //组织继续往后执行
    return;
   }
  //验证密码,邮箱,手机是否为空
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send("密码不存在");
    return;
  }
  var $email=req.body.email;
  if(!$email){
    res.send("邮箱不存在");
    return;
  }
  var $phone=req.body.phone;
  if(!$phone){
    res.send("phone不存在");
    return;
  }
  //执行sql语句,将注册数据插入到yonghu_user数据表中  
  var sql="INSERT INTO yonghu_user values(null,?,?,?,?,null,null,null)";
  pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
    if(err) throw err;
    //是否添加成功  
    res.send("1");
    console.log(sql);
 });
});

//2.用户登录
router.post('/login',(req,res)=>{
  var obj=req.body;
  //验证数据是否为空
  var $uname=obj.uname;
  var $upwd=obj.upwd;
  if(!$uname){
     res.send({code:401,msg:"uname required"});
	   return;
  }
  if(!$upwd){
     res.send({code:402,msg:"upwd required"});
	   return;
  }
  //执行sql语句,查看是否验证成功
  var sql="SELECT * FROM yonghu_user WHERE uname=? AND upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
     if(err) throw err;
	 //判断查询结果数组长度是否大于0,如果大于.查得到结果.用户登录成功
	 if(result.length>0){
	     res.send("1");
	 }else{
	     res.send("0");
	 }
  });
});

//获取商品
router.get("/pro",(req,res)=>{
  var sql=`select * from yonghu_furniture_pic`;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    if(result.length>0){
      res.send(result)
    }else{
      res.send("未获取到数据")
    }
  });
});

// 获取数据
router.get("/product",(req,res)=>{
  // var pno = req.query.pno
  var output = {
    pno: 0,
    pageSize: 8,
    count: 0,
    pageCount: 0,
    products: []
  } 
  if(req.query.pno !== undefined)
    output.pno = parseInt(req.query.pno)
  var sql=`select * from yonghu_product`;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    var count = result.length;
    var pageCount = Math.ceil(count/output.pageSize);
        output.count = count;
        output.pageCount = pageCount;
    var starti = output.pno*output.pageSize;
    console.log(output.pno,starti)
    output.products = result.slice(starti,starti + output.pageSize);
    res.send(output)
  });
});

//导出路由器
module.exports=router;
