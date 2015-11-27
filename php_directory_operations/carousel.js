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
                //img_dom_arr = createCarousel(result['files']);
                createAnimatedCarousel(result['files']);
            },
            error: function(result)
            {

            }
        });
}

/* START Featureset 2*/
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
            prev_image(img_dom_arr, length);
            break;

        case 'next-button':
            next_image(img_dom_arr, length);
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
/* END Featureset 2*/

/* START Featureset 3*/
var carousel_obj = {
    active: 0,      // The index for currently displayed image
    src_arr: [],    // The array holding the filenames of the images
    dom_arr: []     // The array of images to be present in the DOM (three of them)
};
var left_img_css = {
    position: 'absolute',
    right: '100%',
    //left: '0',
    width: '100%',
    height: 'auto'
};
var middle_img_css = {
    position: 'absolute',
    //left: '0',
    //right: '0',
    width: '100%',
    height: 'auto'
};
var right_img_css = {
    position: 'absolute',
    left: '100%',
    //right: '0',
    width: '100%',
    height: 'auto'
};
var SLIDE_TIME = 750;
var left_translate = {
    transform: 'translate(100%, 0)',
    'transition-duration': SLIDE_TIME + 'ms'
};
var middle_translate = {
    transform: 'translate(0, 0)',
    'transition-duration': '0s'
};
var right_translate = {
    transform: 'translate(-100%, 0)',
    'transition-duration': SLIDE_TIME + 'ms'
};
/**
 * createAnimatedCarousel
 */
function createAnimatedCarousel(img_arr)
{
    // Clipping rectangle div
    var clip_container = $('<div>');
    clip_container_css = {
        position: 'absolute',
        width: '56vw',
        height: '42vw',
        left: '0',          // Used for centering
        right: '0',         // absolutely-positioned
        margin: '0 auto',   // container to the body.
        clip: 'rect(0, 56vw, 42vw, 0)',
        overflow: 'hidden'
    };
    clip_container.css(clip_container_css);

    // Image container div
    var container = $('<div>');
    var container_css = {
        'width': '100%',
        'height': '100%',
        position: 'relative'
    };
    container.attr('id', 'image-container');
    container.css(container_css);

    // Set the carousel object properties
    carousel_obj.src_arr = img_arr;
    carousel_obj.active = 0;
    
    // Setting the three images for the image container
    var length = img_arr.length;
    // Middle image
    var mid_img = $('<img>').attr('src', img_arr[0]);
    mid_img.css(middle_img_css);
    // Left image
    var left_index = length - 1;
    var left_img = $('<img>').attr('src', img_arr[left_index]);
    left_img.css(left_img_css);
    // Right image
    var right_index = (length == 1 ? 0 : 1);
    var right_img = $('<img>').attr('src', img_arr[right_index]);
    right_img.css(right_img_css);

    carousel_obj.dom_arr.push(left_img, mid_img, right_img);
    container.append(left_img, mid_img, right_img);
    clip_container.append(container);

    var body = $('#page-wrapper');
    body.append(clip_container);

    var buttons = $('<div>');
    buttons.on('click', 'button', function()
    {
        slideCarousel(this, carousel_obj);
    });
    buttons.css({
        position: 'relative',
        top: '42vw',
        width: '56vw',
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
}

function slideCarousel(button, carousel_obj)
{
    var length = carousel_obj.src_arr.length;
    switch ($(button).attr('id'))
    {
        case 'prev-button':
            prev_image(carousel_obj, length);
            break;

        case 'next-button':
            next_image(carousel_obj, length);
            break;
    }
    changeCarouselImages(carousel_obj);
}

function prev_image(carousel_obj, length)
{
    length = typeof length !== 'undefined' ? length : carousel_obj.src_arr.length;
    carousel_obj.active = decrementArrayIndex(carousel_obj.active, carousel_obj.src_arr);

    $('#image-container').css(left_translate);
}

function next_image(carousel_obj, length)
{
    length = typeof length !== 'undefined' ? length : carousel_obj.src_arr.length;
    carousel_obj.active = incrementArrayIndex(carousel_obj.active, carousel_obj.src_arr);

    $('#image-container').css(right_translate);
}

function changeCarouselImages(carousel_obj)
{
    var active = carousel_obj.active;
    var length = carousel_obj.src_arr.length;
    setTimeout(function()
    {
        carousel_obj.dom_arr[0].attr('src', carousel_obj.src_arr[decrementArrayIndex(active, carousel_obj.src_arr)]);
        carousel_obj.dom_arr[1].attr('src', carousel_obj.src_arr[active]);
        carousel_obj.dom_arr[2].attr('src', carousel_obj.src_arr[incrementArrayIndex(active, carousel_obj.src_arr)]);
        $('#image-container').css(middle_translate);
    }, SLIDE_TIME);
}

/* END Featureset 3*/

function incrementArrayIndex(index, array)
{
    length = array.length;
    return (++index == length ? 0 : index);
}
function decrementArrayIndex(index, array)
{
    length = array.length;
    return (--index < 0 ? length-1 : index);
}