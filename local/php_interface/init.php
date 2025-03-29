<?php


use Bitrix\Main\EventManager;


$eventManager = EventManager::getInstance();

$eventManager->addEventHandlerCompatible(
    'crm',
    'OnBeforeCrmDealUpdate',
    function (&$arFields) {
        $text = '';
        foreach($arFields as $key => $value)
        {
            $text .= "$key: $value \n";
        }
        file_put_contents("test_some.txt", $text);
    }
);