<?php

require("mysql_connect.php");

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : -1;

$query = "SELECT * FROM todo_items WHERE user_id=" . $user_id;

$result = mysqli_query($conn, $query);
$output = [];
if (mysqli_num_rows($result) > 0)
{
	$i = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$output[$i++] = $row;
	}
	print(json_encode($output));
}
?>