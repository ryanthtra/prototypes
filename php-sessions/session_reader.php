<?php
session_start();
//date_default_timezone_set('utc');

foreach ($_POST as $field=>$entry)
{
	$_SESSION[$field] = $entry;

	if (preg_match('/^.{2,}$/', $entry))	// If this is a valid entry
	{
		// Remove the previous error message from the errors array, if there was one.
		if (isset($_SESSION['errors'][$field]))
			unset($_SESSION['errors'][$field]);
	}
	else // This is an invalid entry.
	{
		// Add an error message to the errors array.
		$_SESSION['errors'][$field] = 'Invalid ' . $field;
		header('location: session_setter.php');
	}
	echo($field . ': ' . $entry . '<br/>');
}
// If there were no errors, then just remove the errors array altogether.
if (isset($_SESSION['errors']) && count($_SESSION['errors']) == 0)
	unset($_SESSION['errors']);

print('<a href="session_setter.php">Go back to form</a>');
?>