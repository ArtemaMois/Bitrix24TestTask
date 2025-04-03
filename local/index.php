<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php';

$dir = $_SERVER['DOCUMENT_ROOT'] . "/local/";

$files1 = scandir($dir);
$files2 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
print_r($files2);