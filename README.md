## Описание к Bitrix24

**Устанавливаем BX24 в папку www**
Обязательно добавляем доменное имя **task.ru** в админке BX24.

![image](https://github.com/user-attachments/assets/2479687a-9bca-4cbd-b80c-fca278291044)


Прописываем локально этот адрес в "C:\Windows\System32\drivers\etc\hosts"

![image](https://github.com/user-attachments/assets/37a3b855-88fe-4655-a21c-1c7d7c3ab715)


**Поставленная задача:** 

Добрый день, Необходимо развернуть 1С-Битрикс в редакции с интернет-магазином и Битрикс 24 на локале и сделать следующее, 
при оформлении заказа на сайте 1С-Битрикс, в Битрикс 24 формируется сделка и все данные из заказа отображаются в полях сделки, причем 
если мы их отредактируем то эти изменения так же отразятся и на 1С-Битрикс, интеграция должна быть в двух направлениях.


**Описание выполненной работы:**

После создания заказа в Bitrix: управление сайтом создается сделка в BX24, а также счет к этой сделке, в котором указана сумма за товары.
После изменения статуса сделки в BX24, статус меняется и в Bitrix: управление сайтом, а также, если изменить статус заказа в адмнике Bitrix: управление сайтом, то изменения отобразятся и в Bitrix24.
После добавления/удаления или изменения количества товаров в BX24 изменения отображаются в Bitrix: управление сайтом.
Если товара нет в BX24, то при создании заказа, все товары из него будут созданы в BX24.
При создании заказа в Bitrix: Упралвение сайтом синхронизируется количество товаров на складе в BX24.
При отмене заказа на любом из сайтов, изменения отобразятся и на другом.
