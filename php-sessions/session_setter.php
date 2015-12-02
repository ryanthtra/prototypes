<?
session_start();
date_default_timezone_set('utc');
?>
<form action="session_reader.php" method="post">
    <input type="text" name="name" placeholder="Name" value="<?if (isset($_SESSION['name'])) echo $_SESSION['name'];?>" /><br />
	<p style="color: red"><?if (isset($_SESSION['errors']['name'])) echo $_SESSION['errors']['name'];?></p>
    <input type="text" name="age" placeholder="Age" value="<?if (isset($_SESSION['age'])) echo $_SESSION['age'];?>" /><br />
    <p style="color: red"><?if (isset($_SESSION['errors']['age'])) echo $_SESSION['errors']['age'];?></p>
    <input type="text" name="occupation" placeholder="Occupation" value="<?if (isset($_SESSION['occupation'])) echo $_SESSION['occupation'];?>" /><br />
    <p style="color: red"><?if (isset($_SESSION['errors']['occupation'])) echo $_SESSION['errors']['occupation'];?></p>
	<button type="submit">Submit</button>
	<br />
</form>
<?//print_r($_SESSION);?>
