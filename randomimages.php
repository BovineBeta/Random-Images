<?php
    //生成随机数
    $num = rand(1, 100);
    
    //拼接后缀名
    $path = $num.".png";
    
    //生成图片地址
    $url = "http://example.com/".$path;
    
    //重定向到所生成的地址
    die(header("Location: $url"));    
?>
