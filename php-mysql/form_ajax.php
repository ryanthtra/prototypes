<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="form_ajax.js"></script>
    <script>
    	$(function()
    	{
			$("#datepicker").datepicker();
    	});
    </script>
</head>

<body>
    <form>
        <input type="text" id="form-title" name="title" placeholder="Title" value="" /><br />
        <input type="text" id="form-details" name="details" placeholder="Details" value="" /><br />
        <input type="text" name="date" id="datepicker" placeholder="Date" /><br />
        <input type="text" id="form-assignee" name="assignee" placeholder="Assignee" value="" /><br />
        <input type="button" id="submit-button" value="Submit" />
    </form>
</body>
</html>
