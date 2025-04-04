<?php 

class timon_products extends CModule
{
    var $MODULE_ID = 'timon.products';
    var $MODULE_NAME = 'Обновление количества товаров на складе';
    var $MODULE_DESCRIPTION = "Модуль для синхронизации товаров на сайте и в BX24с помощью REST.";
    var $MODULE_VERSION = "1.0";
    var $MODULE_VERSION_DATE = "2025-04-03 12:00:00";
    var $PARTNER_NAME = 'Artem Moiseev';
    var $PARTNER_URI = '';

    public function DoInstall()
    {
        \Bitrix\Main\ModuleManager::registerModule($this->MODULE_ID);
    }

    public function DoUninstall()
    {
        \Bitrix\Main\ModuleManager::unRegisterModule($this->MODULE_ID);
    }
}
