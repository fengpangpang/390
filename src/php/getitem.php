<?php

//引入数据库
include('./conn.php');

//获取前端数据
$id = $_REQUEST['id'];

//sql查询语句
$sql = "select * from product where id='$id'";

//执行sql语句
$res = $mysqli->query($sql);

//关闭数据库
$mysqli->close();

//获取数据
$row = $res->fetch_assoc();

//将数据转换为json字符串
$json = json_encode($row);

echo $json;
