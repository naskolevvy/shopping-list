<?php
	session_start();
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	$name = "host";
	$usenm = "username";
	$pass = "password";
	$db = "databaseName";
	// Create connection
	$conn = new mysqli($name, $usenm, $pass, $db);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "SELECT * FROM shopping";

	$result = $conn->query($sql);
		echo "<tr><th>Name</th><th>Item</th><th>Origin</th><th>Quantity</th><th>Price</th><th>DELETE</th></tr>";
    while($row = $result->fetch_assoc()) {
		echo "<tr>";
		echo "<td>".$row['name']."</td>";
		echo "<td>".$row['item']."</td>";
		echo "<td>".$row['origin']."</td>";
		echo "<td>".$row['quantity']."</td>";
		echo "<td>".$row['price']."</td>";
		echo "<td><button data-id = '".$row['id']."' onClick = 'delete_shopping(this)' style = 'padding: 0;
border: none;
background: none;'>&#x274C;</button></td>";
		echo "</tr>";
	}
?>