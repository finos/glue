---
id: Fill

title: Fill
---

## Data Dictionary - Entity Table: Fill

Fill is the term used to refer to the satisfying of an order to trade a financial asset.
It is the basic act of any market transaction – when an order has been completed, it is often referred to as ‘filled’ 
or as the order having been executed. 


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Fill`|`id`|BIGINT(12)|PK, NN|.|
|`Fill`|`Date_Time`|DATETIME|NULL|.|
|`Fill`|`ExternalID`|VARCHAR(45)|NULL|.|
|`Fill`|`SequenceNumber`|BIGINT(6)|NULL|.|
|`Fill`|`Quantity`|DECIMAL|NULL|.|
|`Fill`|`Price`|DECIMAL|NULL|.|
|`Fill`|`Currency`|BIGINT(12)|NULL|.|
|`Fill`|`Comission`|DECIMAL|NULL|.|
|`Fill`|`Comission_Currency`|BIGINT(12)|NULL|.|
|`Fill`|`Fee`|DECIMAL|NULL|.|
|`Fill`|`Fee_Currency`|BIGINT(12)|NULL|.|
|`Fill`|`Order`|BIGINT(12)|NULL|.|
|`Fill`|`Side`|VARCHAR(4)|NULL|.|
|For Table:` Fill`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Order`|(`Order`)|`Order` (`id`)| NO ACTION|NO ACTION|
|`Comission_Currency`|(`Comission_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`FillCurrency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
| `Fee_Currency`|( `Fee_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|For Table:` Fill`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Order_idx`|`Fill`|(`Order` ASC)|VISIBLE|.|
| `Comission_Currency_idx`|`Fill`| (`Comission_Currency` ASC)| VISIBLE|.|
|`Currency_idx`|`Fill`|(`Currency` ASC)|VISIBLE|.|
|`Fee_Currency_idx`|`Fill`|(`Fee_Currency` ASC)|VISIBLE|.|
