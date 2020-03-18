<?php
ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
$name = "host";
$usenm = "username";
$pass = "password";
$db = "databaseName";

$conn = mysqli_connect($name, $usenm, $pass, $db);
$id = $_POST['id'];
$sql = "DELETE FROM shopping WHERE id = '".$id."'";
$result = mysqli_query($conn, $sql);

?>