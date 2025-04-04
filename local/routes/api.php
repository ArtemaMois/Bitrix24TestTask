<?php



CModule::IncludeModule('timon.products');

use Timon\Products\ProductBalanceController;


return function (\Bitrix\Main\Routing\RoutingConfigurator $routes) {
    $routes->post('/api/products/storage/', [ProductBalanceController::class, 'updateProducts']);
};