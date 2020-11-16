---
id: Transaction_Type

title: Transaction_Type
---

## Data Dictionary - Entity Table: Transaction_Type

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)'Contains transaction types'|
|`Name`|VARCHAR(45)|NULL|market;limit;all-or-none;fill-or-kill;stop limit; trailing stop|Transaction type name|
||
