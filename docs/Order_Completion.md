---
id: Order_Completion

title: Order_Completion
---

## Data Dictionary - Entity Table: Order_Completion

Enter the Order_Completion : Date, Status, Filled_Quantity, Remaining_Quantity, AvgPrice, Currency, GrossValue, NetValue, TotalCharges, ChargeCurrency


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Order_Completion`|`id`|BIGINT(12)|PK, NN|.|
|`Order_Completion`|`Date`|DATETIME|NULL|.|
|`Order_Completion`|`Status`|VARCHAR(42)|NULL|.|
|`Order_Completion`|`Filled_Quantity`|DECIMAL|NULL|.|
|`Order_Completion`|`Remaining_Quantity`|DECIMAL|NULL|.|
|`Order_Completion`|`AvgPrice`|DECIMAL|NULL|.|
|`Order_Completion`|`Currency`|BIGINT(12)|NULL|.|
|`Order_Completion`|`GrossValue`|DECIMAL|NULL|.|
|`Order_Completion`|`NetValue`|DECIMAL|NULL|.|
|`Order_Completion`|`TotalCharges`|DECIMAL|NULL|.|
|`Order_Completion`|`ChargeCurrency`|BIGINT(12)|NULL|.|
|For Table: `Order_Completion`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Currency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`Charge_Currency`|(`Charge_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|For Table: `Order_Completion`|
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Currency_idx`|`Order_Completion`|(`Currency` ASC) | VISIBLE|.|
