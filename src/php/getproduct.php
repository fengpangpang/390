<?php

//连接数据库
include('./conn.php');

//查询语句
$sql = "select * from product";

//执行 sql 语句
$res = $mysqli->query($sql);

//关闭数据库
$mysqli->close();

//创建数组
$arr = array();

//循环遍历数组
while ($row = $res->fetch_assoc()) {
    //把数据push到arr这个数组中
    array_push($arr, $row);
}

//把arr数组转换为 json字符串
$json = json_encode($arr);

echo $json;
