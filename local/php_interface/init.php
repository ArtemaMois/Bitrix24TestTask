<?php


use Bitrix\Main\EventManager;


$eventManager = EventManager::getInstance();

$eventManager->addEventHandler(
    'crm',
    'OnBeforeCrmDealUpdate',
    'updateOrderInIntershop'
);

function updateOrderInIntershop(&$arFields)
{
    \Bitrix\Main\Loader::includeModule('crm');
    $url = "https://intershop.ru/api/orders";
    $http = getHttpClient();
    try {
        $data = getDataForQuery($arFields);
        $http->post($url, $data);
        $json = json_decode($http->getResult())->data;
        file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/local/" . uniqid() . ".json", $json);
    } catch (Exception $e) {
        $json = $e->getMessage();
        file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/local/" . uniqid() . ".json", $json);
    }
    // if(count($http->getError()) > 0)
    // {
    //     $json = json_encode($http->getError());
    // } else {
    //     $json = $http->getResult();
    // }
}

function getDataForQuery(array $fields)
{
    $dealId = $fields['ID'];
    $deal = getDealById($dealId);
    $orderId = $deal['ORIGIN_ID'];
    if (isset($fields['STAGE_ID'])) {
        $status = match ($fields['STAGE_ID']) {
            'NEW' => 'N',
            'PREPARATION' => 'P',
            'PREPAYMENT_INVOICE' => 'P',
            'EXECUTING' => 'P',
            'FINAL_INVOICE' => 'P',
            'WON' => 'F',
            'LOSE' => ['CANCELED' => 'Y']
        };
        return ['STATUS_ID' => $status, 'ID' => $orderId];
    } else if (isset($fields['PRODUCT_ROWS'])) {
        $dirtyProducts = $fields['PRODUCT_ROWS'];
        $products = [];
        foreach ($dirtyProducts as $product) {
            $products[$product['PRODUCT_NAME']] = [
                    'PRODUCT_NAME' => $product['PRODUCT_NAME'],
                    'QUANTITY' => $product['QUANTITY'],
                    'MEASURE_CODE' => $product['MEASURE_CODE'],
                    'MEASURE_NAME' => $product['MEASURE_NAME'],
                    'PRICE' => $product['PRICE'],
                    'BASE_PRICE' => $product['BASE_PRICE'],
                    'CURRENCY' => $product['CURRENCY']
            ];
        }
        return ['ID' => $orderId, 'PRODUCTS' => $products];
    }
}

function getDealById(int $dealId)
{
    $result = \Bitrix\Crm\DealTable::getList([
        'select' => ['ID', 'TITLE', 'ORIGIN_ID'],
        'filter' => ['ID' => $dealId]
    ]);
    $deals = [];
    foreach ($result as $item) {
        $deals[] = $item;
    }
    return array_shift($deals);
}

function getHttpClient()
{
    $httpClient = new \Bitrix\Main\Web\HttpClient();
    $httpClient->setAuthorization(
        'admin',
        'bitrix'
    );
    $httpClient->disableSslVerification();
    return $httpClient;
}
