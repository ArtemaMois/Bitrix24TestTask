<?php 


$module_folder = \Bitrix\Main\Application::getDocumentRoot() . '/local/modules/timon.products/';

\Bitrix\Main\Loader::registerNamespace("Timon\Products", $module_folder . "/lib/");