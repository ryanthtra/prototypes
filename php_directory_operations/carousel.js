var img_dom_arr = {
    active: 0,
    imgs: []
};

document.addEventListener("DOMContentLoaded", function()
{
    load_files("images");
});

function load_files(directory)
{
    $.ajax(
        {
            url: 'get_images.php?image_directory=' + directory,
            method: 'GET',
            dataType: 'json',
            success: function(result)
            {
                img_dom_arr = createCarousel(result['files']);
            },
            error: function(result)
            {

            }
        });
}

function createCarousel(img_arr)
{
    var container = $('<div>', {
        class: 'container'
    });
    var container_css = {
        position: 'relative',
        width: '60vw',
        height: '60vh',
        margin: '0 auto',
        'text-align': 'center'
    };
    container.css(container_css);

    var ret_arr = {
        active: 0,
        imgs: []
    };
    var img_css = {
        position: 'absolute',
        top: '0',
        left: '0',
        'max-width': '100%',
        'max-height': '100%'
    };
    var length = img_arr.length;
    for (var i = 0; i < length; i++)
    {
        var img = $('<img>');
        img.css(img_css);
        if (i != 0) img.css('display', 'none');
        img.attr('src', img_arr[i]);
        img.appendTo(container);
        ret_arr.imgs.push(img);
    }

    var body = $('body');
    body.append(container);

    var buttons = $('<div>');
    buttons.on('click', 'button', function()
    {
        displayNewImage(this, ret_arr);
    });
    buttons.css({
        width: '60vw',
        margin: '0 auto'
    });
    var button_prev = $('<button>', {
        id: 'prev-button'
    });
    button_prev.text('Previous');
    var button_next = $('<button>', {
        id: 'next-button'
    });
    button_next.text('Next');
    buttons.append(button_prev, button_next);
    
    body.append(buttons);

    return ret_arr;
}

function displayNewImage(button, img_dom_arr)
{
    var length = img_dom_arr.imgs.length;
    switch ($(button).attr('id'))
    {
        case 'prev-button':
            img_dom_arr.active = ((img_dom_arr.active - 1) < 0 ? length - 1 : img_dom_arr.active - 1);
            break;

        case 'next-button':
            img_dom_arr.active = ((img_dom_arr.active + 1) == length ? 0 : img_dom_arr.active + 1);
            break;
    }

    for (var i = 0; i < length; i++)
    {
        if (i != img_dom_arr.active)
            img_dom_arr.imgs[i].css('display', 'none');
        else
            img_dom_arr.imgs[i].css('display', 'initial');
    }
}