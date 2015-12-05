<?php
	
require("mysql_connect.php");

function getUserIds()
{
	require("mysql_connect.php");
	$get_user_ids = "SELECT DISTINCT(`user_id`) FROM `todo_items` ORDER BY `user_id` DESC";
	$result = mysqli_query($conn, $get_user_ids);
	$uids = [];
	if (mysqli_num_rows($result) > 0)
	{
		$i = 0;
		while ($row = mysqli_fetch_assoc($result))
		{
			$uids[$i++] = $row['user_id'];
		}

		return($uids[rand(0, count($uids))]);
	}
	else
	{
		return 999;
	}
}

$title = !empty($_POST['title']) ? $_POST['title'] : 'default title';
$details = !empty($_POST['details']) ? $_POST['details'] : 'default details';
$user_id = getUserIds();


$regex_date = '/^(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d$/';
$output = 
	[
		'errors'=>[]
	];

// Pre-query checks
$timestamp = '';
if (!empty($_POST['date']) && preg_match($regex_date, $_POST['date']))
{
	$arr = explode('/', $_POST['date']);
	$timestamp = $arr[2] . '-' . $arr[0] . '-' . $arr[1] . ' 00:00:00';
}
else
{
	$output['errors']['date'] = 'Invalid date entered!';
}


if (empty($output['errors']))
{
	$query = "INSERT INTO `todo_items` (`id`, `title`, `details`, `timestamp`, `user_id`) VALUES (null,'" . $title . "','" . $details . "'," . (empty($timestamp) ? "UNIX_TIMESTAMP()" : "UNIX_TIMESTAMP('" . $timestamp . "')") . "," . $user_id . ")";
	
	$result = mysqli_query($conn, $query);
	$output = [];
	if (mysqli_affected_rows($conn) > 0)
	{
		$new_id = mysqli_insert_id($conn);
		$output['success'] = true;
		$output['new_id'] = $new_id;
		print(json_encode($output));
	}
	else
	{
		$output['success'] = false;
		$output['errors']['general'] = 'Something bad happened!';
		print(json_encode($output));
	}
}
else
{
	$output['success'] = false;
	$output['errors']['general'] = 'Something bad happened!';
	print(json_encode($output));
}
?>