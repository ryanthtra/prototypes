document.addEventListener("DOMContentLoaded", function()
{
    load_files('images');
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
                createGallery(result['files']);
            },
            error: function(result)
            {

            }
        });
}

function createGallery(img_arr)
{
    var gallery = $('<div>',
        {
            class: 'gallery',

        });
    var gallery_traits =
        {
            width: '90vw',
            margin: '0 auto'
        };
    gallery.css(gallery_traits);
    gallery.on('click', 'img', function()
    {
        blowupImage(this);
    });

    var button_traits =
        {
            width: '25%',
            display: 'inline-block',
            float: 'left'
        }
    var img_traits =
        {
            'max-width': '100%',
            'max-height': '100%'
        };
    var length = img_arr.length;
    for (var i = 0; i < length; i++)
    {
        var button = $('<a>',
            {
                class: 'btn btn-link',
                'data-toggle': 'modal',
                'data-target': '#blowup-modal'
            });
        button.css(button_traits);

        var image = $('<img>');
        image.attr('src', img_arr[i]);
        image.css(img_traits);

        button.append(image);
        gallery.append(button);
    }

    $('body').append(gallery);
}

function blowupImage(image)
{
    $('.modal-title').text($(image).attr('src'));
    var modal_img = $('.modal-body>img');
    modal_img.attr('src', $(image).attr('src'));
    modal_img.attr('alt', $(image).attr('src'));
    modal_img.css(
        {
            'max-width': '100%',
            'max-height': '100%'
        });
};