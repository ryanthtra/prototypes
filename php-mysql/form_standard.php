<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <script>
    	$(function()
    	{
			$("#datepicker").datepicker();
		});
    </script>
</head>

<body>
    <form action="index_insert.php" method="post">
        <input type="text" name="title" placeholder="Title" value="" /><br />
        <input type="text" name="details" placeholder="Details" value="" /><br />
        <input type="text" name="date" id="datepicker" placeholder="Date" /><br />
        <input type="text" name="assignee" placeholder="Assignee" value="" /><br />
        <input type="submit" name="name" value="Submit" />
    </form>
</body>
</html>
