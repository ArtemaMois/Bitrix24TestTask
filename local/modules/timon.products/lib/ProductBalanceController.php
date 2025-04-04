<?php

namespace Timon\Products;

use Bitrix\Main\Engine\Controller;
use Exception;

class ProductBalanceController extends Controller
{
    public function getDefaultPreFilters(): array
    {
        return [];
    }
    public function updateProductsAction()
    {
        $productId = $this->request->getPost("PRODUCT_ID");
        $amount = $this->request->getPost('AMOUNT');
        if (\Bitrix\Main\Loader::includeModule('catalog')) {
            $arFields = [
                'AMOUNT' => $amount,
                'PRODUCT_ID' => $productId,
                'STORE_ID' => 1
            ];
            $ID = \CCatalogStoreProduct::Add($arFields);
            return json_encode(['status' => $ID]);
        }
    }

}
