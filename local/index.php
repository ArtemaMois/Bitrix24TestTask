<?php

use Bitrix\Catalog\StoreDocumentTable;
use Bitrix\Catalog\StoreProductTable;

require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php';

function preDump($val)
{
    echo "<pre>";
    print_r($val);
    echo "</pre>";
}



Bitrix\Main\Loader::includeModule('catalog');

// $arFields = [
//     'AMOUNT' => 150
// ];

// $ID = \CCatalogStoreProduct::Update(295, $arFields);

// preDump($ID);

$response = \CCatalogStore::GetList([], [], false, false, );
while($item = $response->Fetch())
{
    preDump($item);
}
preDump(1);

// $resp = StoreDocumentTable::getList()->Fetch();
// $store = new StoreDocumentTable();
// $store->createObject();

// $products = StoreProductTable::getList();
// while($item = $products->Fetch())
// {
//     preDump($item);
// }
// preDump($resp);