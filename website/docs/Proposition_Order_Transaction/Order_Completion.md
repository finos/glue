---
id: Order_Completion

title: Order_Completion
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Order_Completion

This table shows how many units of the order is filled and what the remaining items are.
 It also shows net value of the order (bought or sold instruments) plus related fees and comissions (charges). 
 Client advisor can track order execution path and what part of it is closed.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Date`|DATETIME|NULL|10/10/2020  12:30:00 PM|Order completion date/time|
|`Status`|VARCHAR(42)|NULL|filled;working;cancelled;rejected;completed;expired|Order status. NOT same status as in table Order|
|`Filled_Quantity`|DECIMAL|NULL|243|Filled quantity of the order|
|`Remaining_Quantity`|DECIMAL|NULL|546|Remaining unfilled quantity of the order|
|`AvgPrice`|DECIMAL|NULL|12|Average execution price|
|`Currency`|BIGINT(12)|NULL|2|Order currency|
|`GrossValue`|DECIMAL|NULL|2940|Total value of the order: sum of order itself (net) plus charges (fees and comissions)|
|`NetValue`|DECIMAL|NULL|2916|Net value of the order (without fees and comissions)|
|`TotalCharges`|DECIMAL|NULL|24|Total sum of execution and other fees and comissions|
|`ChargeCurrency`|BIGINT(12)|NULL|1|Fees and comissions currency|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Currency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`Charge_Currency`|(`Charge_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Currency_idx`|`Order_Completion`|(`Currency` ASC) | VISIBLE|.|
|`Charge_Currency_idx`|`Order_Completion`|(`ChargeCurrency` ASC) | VISIBLE|.|
||
