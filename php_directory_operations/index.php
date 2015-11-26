<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Prototype 1</title>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <style>
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
      width: 70%;
      margin: auto;
  }
  </style>
</head>
<body>
    <div id="image_container">
        <? presentBootstrapCarousel("images"); ?>
    </div>
</body>
</html>


<?
date_default_timezone_set('utc');
function presentAllImages($img_path)
{
    $img_arr = glob($img_path . "/*");

    foreach($img_arr as $filename)
    {
        print("<img src=" . $filename . " />");
    }
}

function presentBootstrapCarousel($img_path)
{
    $img_arr = glob($img_path . "/*");
    
    print("<div id=" . $img_path . " class='carousel slide' data-ride='carousel'>");

    createCarouselIndicators($img_arr, $img_path);
    createCarouselWrapper($img_arr);
    createCarouselControls($img_path);

    print("</div>");
}

function createCarouselIndicators($img_arr, $id_name)
{
    print('<div class="carousel-indicators">');
    foreach ($img_arr as $index=>$filename)
    {
        $active = ($index == 0 ? 'class=' . '"active"' : '');
        print("<li data-target=#" . $id_name . " data-slide-to='" . $index . "' " . $active . "></li>");
    }
    print("</div>");
}

function createCarouselWrapper($img_arr)
{
    print('<div class="carousel-inner" role="listbox">');
    for($i = 0; $i < count($img_arr); $i++)
    {
        $item_class = $i==0 ? 'class=' . '"item active"' : 'class=' . '"item"'; 
        print("<div " . $item_class . " >");
        print('<img src=' . $img_arr[$i] . ' >');
        print("</div>");
    }
    print("</div>");
}

function createCarouselControls($id_name)
{
    print('<a class=' .'"left carousel-control" href="#' . $id_name . '" role="button" data-slide="prev">');
    print('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>');
    print('<span class="sr-only">Previous</span>');
    print('</a>');

    print('<a class=' .'"right carousel-control" href="#' . $id_name . '" role="button" data-slide="next">');
    print('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');
    print('<span class="sr-only">Next</span>');
    print('</a>');

}
?>