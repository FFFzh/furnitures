#设置
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE  IF EXISTS yonghu;
#创建数据库
CREATE DATABASE yonghu CHARSET=UTF8;
#进入数据库
USE yonghu;

/**用户信息**/
CREATE TABLE `yonghu_user`(
  `uid` INT PRIMARY KEY AUTO_INCREMENT,
  `uname` VARCHAR(32),
  `upwd` VARCHAR(32),
  `email` VARCHAR(64),
  `phone` VARCHAR(16),
  `avatar` VARCHAR(128),        #头像图片路径
  `user_name` VARCHAR(32),      #用户名，如王小明
  `gender` INT(11)                  #性别  0-女  1-男
);

/** 家具图片 **/
CREATE TABLE `yonghu_furniture_pic`(
  `pid` INT PRIMARY KEY AUTO_INCREMENT,
  `furniture_id` INT,            #家具编号
  `sm` VARCHAR(128),             #小图片路径
  `md` VARCHAR(128),             #中图片路径
  `lg` VARCHAR(128)              #大图片路径
);

/**用户信息**/
INSERT INTO `yonghu_user` (`uid`,`uname`,`upwd`,`email`,`phone`,`avatar`,`user_name`,`gender`) VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '14501234560', 'img/avatar/default.png', '秦小雅', '0'),
(NULL, 'haha', '123456', 'ha@qq.com', '17501234560', 'img/avatar/default.png', '哈哈', '1'),
(NULL, 'luelue', '123456', 'lue@qq.com', '16701568560', 'img/avatar/default.png', '略略', '0'),
(NULL, 'leilei', '123456', 'lei@qq.com', '13558434560', 'img/avatar/default.png', '雷雷', '0');



/** 家具图片 **/
INSERT INTO `yonghu_furniture_pic` (`pid`,`furniture_id`,`sm`,`md`,`lg`) VALUES
(NULL,1,'image/product/sm/product1.jpg','image/product/md/product1.jpg','image/product/lg/product1.jpg'),
(NULL,1,'image/product/sm/product2.jpg','image/product/md/product2.jpg','image/product/lg/product2.jpg'),
(NULL,1,'image/product/sm/product3.jpg','image/product/md/product3.jpg','image/product/lg/product3.jpg'),
(NULL,1,'image/product/sm/product4.jpg','image/product/md/product4.jpg','image/product/lg/product4.jpg'),
(NULL,1,'image/product/sm/product5.jpg','image/product/md/product5.jpg','image/product/lg/product5.jpg'),
(NULL,1,'image/product/sm/product6.jpg','image/product/md/product6.jpg','image/product/lg/product6.jpg'),
(NULL,1,'image/product/sm/product7.jpg','image/product/md/product7.jpg','image/product/lg/product7.jpg'),
(NULL,1,'image/product/sm/product8.jpg','image/product/md/product8.jpg','image/product/lg/product8.jpg'),
(NULL,1,'image/product/sm/product9.jpg','image/product/md/product9.jpg','image/product/lg/product9.jpg');



-- 表
CREATE TABLE `yonghu_product`(
  `pid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据
INSERT INTO `yonghu_product` (`pid`,`title`,`pic`,`price`,`discount`,`href`) VALUES
(1,'Y32 501布沙发','image/products/products1.jpg','13770.00','16200.00','product_details.html?lid=1'),
(2,'D9 601布沙发','image/products/products2.png','17670.00','16200.00','product_details.html?lid=2'),
(3,'k6 501布沙发','image/products/products3.jpg','18770.00','16200.00','product_details.html?lid=3'),
(4,'k7 231布沙发','image/products/products4.jpg','19870.00','16200.00','product_details.html?lid=4'),
(5,'G5 124布沙发','image/products/products5.jpg','14560.00','16200.00','product_details.html?lid=5'),
(6,'k6 501布沙发','image/products/products6.jpg','13770.00','16200.00','product_details.html?lid=6'),
(7,'C4 s51布沙发','image/products/products7.jpg','15780.00','16200.00','product_details.html?lid=7'),
(8,'Z4 651布沙发','image/products/products8.jpg','13560.00','16200.00','product_details.html?lid=8'),
(9,'k6 301布沙发','image/products/products9.jpg','13570.00','16200.00','product_details.html?lid=9'),
(10,'V3 653布沙发','image/products/products10.jpg','12345.00','16200.00','product_details.html?lid=10'),
(11,'k6 501布沙发','image/products/products11.jpg','13656.00','16200.00','product_details.html?lid=11'),
(12,'F4 541布沙发','image/products/products12.jpg','17653.00','16200.00','product_details.html?lid=12'),
(13,'k6 501布沙发','image/products/products13.jpg','16773.00','16200.00','product_details.html?lid=13'),
(14,'B7 501布沙发','image/products/products14.jpg','10999.00','16200.00','product_details.html?lid=14');
