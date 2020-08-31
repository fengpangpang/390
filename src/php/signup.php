<?php

//引入conn文件
include('./conn.php');

//接受前端数据
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

//验证用户名是否存在
$sql = "select * from userx where username='$username'";

//执行查询语句
$result = $mysqli->query($sql);

//判断数据库中是否存在该数据，如果存在该数据，大于0
if ($result->num_rows > 0) {
    echo '<script> alert("用户名已存在"); </script>';
    echo '<script>location.href="../html/signin.html"</script>';

    //关闭数据库
    $mysqli->close();
    die();
}

//数据写入数据库
$insret = "insert into userx(username,password) values ('$username','$password')";

//执行插入语句
$res = $mysqli->query($insret);

//关闭数据库
$mysqli->close();
if ($res) {
    echo '<script>alert("注册成功");</script>';
    echo '<script>location.href="../html/signin.html"</script>';
}
