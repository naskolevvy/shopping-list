<?php
ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
$name = "host";
$usenm = "username";
$pass = "password";
$db = "databaseName";

$conn = mysqli_connect($name, $usenm, $pass, $db);
$sql = "INSERT INTO shopping (name,item,origin,quantity,price) VALUES ('".$_POST['name']."','".$_POST['item']."','".$_POST['origin']."','".$_POST['quantity']."','".$_POST['price']."')";
$result = mysqli_query($conn, $sql);

?>