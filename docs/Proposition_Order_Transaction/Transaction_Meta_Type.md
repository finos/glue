---
id: Transaction_Meta_Type

title: Transaction_Meta_Type
---

## Data Dictionary - Entity Table: Transaction_Meta_Type

Transaction metatype showing the direction of the transaction.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)'Contains transaction meta types'|
|`Name`|BIGINT(12)|NOT NULL|buy; sell; dividends; coupon|Name of the transaction metatype|
||
