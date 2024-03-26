<?php
    $files = scandir('https://postapress.ge/images/books/');
    foreach($files as $file) {
        if($file !== "." && $file !== "..") {
            echo "<img src='$file' />";
        }
    }
?>