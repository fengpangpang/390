<?php

//引入 conn 数据  连接数据库
include('./conn.php');

//接收前端传输的数据
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

//SQL 语句  查询userx这个表中是否存在当前传输过来的数据
$sql = "select * from userx where username='$username' and password='$password'";

//执行sql语句
$result = $mysqli->query($sql);

//断开数据库连接
$mysqli->close();

//判断查找结果
if ($result->num_rows > 0) {
    echo '<script>alert("登录成功");</script>';
    echo '<script>location.href="../html/index.html"</script>';
} else {
    echo '<script>alert("用户名或密码错误");</script>';
    echo '<script>location.href="../html/signup.html"</script>';
}
