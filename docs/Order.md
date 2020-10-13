---
id: Order

title: Order
---

## Data Dictionary - Entity Table: Order

Enter the Order : Internal & External ID's, Creation Date, Completion, Instrument, Status, Side, Exchange Order, Exchange


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Order`|`id`|BIGINT(12)|PK, NN|.|
|`Order`|`InternalID`|VARCHAR(45)|NULL|.|
|`Order`|`ExternalID`|VARCHAR(45)|NULL|.|
|`Order`|`Creation_Date`|DATE|NULL|.|
|`Order`|`Completion`|BIGINT(12)|NULL|.|
|`Order`|`Instrument`|BIGINT(12)|NULL|.|
|`Order`|`Status`|VAR
CHAR(45)|NULL|.|
|`Order`|`Side`|VARCHAR(4)|NULL|.|
|`Order`|`Exchange_Order`|TINYINT|NULL|.|
|`Order`|`Exchange`|BIGINT(12)|NULL|.|
|For Table: `Order`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Completion`|(`Completion`)|`Order_Completion` (`id`)| NO ACTION|NO ACTION|
|For Table: `Order`|
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Completion_idx`|`Order`|(`Completion` ASC)  | VISIBLE|.|
