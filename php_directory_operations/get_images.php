<?php
date_default_timezone_set('utc');
requestImages($_GET['image_directory']);

function requestImages($img_dir_path)
{
    $img_arr = glob($img_dir_path . "/*");

    $output = 
    [
      'success'=>true,
      'error'=>'All is good!',
      'files'=>$img_arr
    ];

    print(json_encode($output));
}
?>