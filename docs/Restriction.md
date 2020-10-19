---
id: Restriction

title: Restriction
---

## Data Dictionary - Entity Table: Restriction


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Restriction`|`id`|BIGINT(12)|PK, NN|.|
|`Restriction`|`Name`|VARCHAR(45)|NULL|.|
|`Restriction`|`Owner`|BIGINT(12)|NULL|.|
|`Restriction`|`Pre_Deal_Check`|TINYINT|NULL|.|
|`Restriction`|`Batch_Check`|TINYINT|NULL|.|
|`Restriction`|`Overridable`|TINYINT|NULL|.|
||
