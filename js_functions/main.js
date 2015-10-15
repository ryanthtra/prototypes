// Feature Set 1.1
function myMessage()
{
    console.log("A message of your choice");
}

// Feature Set 1.3
function add(x, y)
{
    console.log((x + y));
}

// Feature Set 2.1
function add2(x, y)
{
    return (x + y);
}

var add2result = add2(10, 36);

// Feature Set 3.1
function cardFlip(element)
{
    $(element).hide();
    var src = getSrc(element);
    console.log(src);
}

// Feature Set 4
function getSrc(back_element)
{
    var $front_element = $(back_element).parent().find("div.front");
    return ($front_element.find("img").attr("src"));
}