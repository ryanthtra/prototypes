document.addEventListener("DOMContentLoaded", function ()
{
    $('#submit-button').on('click', function ()
    {
        addItem();
    });
});

function addItem()
{
    $.ajax(
    {
        method: 'POST',
        dataType: 'json',
        url: 'index_insert.php',
        data: {
            title: $('#form-title').val(),
            details: $('#form-details').val(),
            date: $('#datepicker').val(),
            assignee: $('#form-assignee').val()
        },
        success: function(result)
        {
            if (result.success)
            {
                var message = $('<p>');
                message.text("Your todo item has been added to the database!");
                $('body').append(message);
            }
            else
            {
                var message = $('<p>');
                message.text(result['errors']['general']);
                $('body').append(message);
            }
        },
        error: function(result)
        {

        }
    });
}