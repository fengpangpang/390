<?php

//请求头
header('content-type:text/html;charset=utf-8');

//数据库资料
$mysql_conf = array(
    'host' => 'localhost:   3306',
    'db_user' => 'root',
    'db_pass' => 'root',
    'db' => 'h5-2006'
);

//连接数据库
$mysqli = @new mysqli(
    $mysql_conf['host'],
    $mysql_conf['db_user'],
    $mysql_conf['db_pass']
);

//判断连接数据库是否连接成功
if ($mysqli->connect_errno) {
    die('连接错误' . $mysqli->connect_errno);
};

//设置查询字符
$mysqli->query('set names utf8');

//选择数据库
$select_db = $mysqli->select_db($mysql_conf['db']);
if (!$select_db) {
    die('数据库选择错误' . $mysqli->error);
}
