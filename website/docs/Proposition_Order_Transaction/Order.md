---
id: Order

title:  Order
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Order

When investment proposition is discussed with the client and approved, it generates order in the related trading system.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`InternalID`|VARCHAR(45)|NULL|1|Order internal id|
|`ExternalID`|VARCHAR(45)|NULL|1|Order external id (e.g., from exchange)|
|`Creation_Date`|DATE|NULL|1/1/2020  12:30:00 PM|Order create date and time|
|`Completion`|BIGINT(12)|NULL|1|Order completion id|
|`Instrument`|BIGINT(12)|NULL|1|Instrument id to be traded|
|`Status`|VARCHAR(45)|NULL|filled; working; cancelled; rejected; completed; expired.|Order status|
|`Side`|VARCHAR(4)|NULL|buy; sell|Buy or sell order|
|`Exchange_Order`|TINYINT|NULL|1|Whether it is exchange or OTC order|
|`Exchange`|BIGINT(12)|NULL|1|Id of the exchange|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Completion`|(`Completion`)|`Order_Completion` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Completion_idx`|`Order`|(`Completion` ASC)  | VISIBLE|.|
