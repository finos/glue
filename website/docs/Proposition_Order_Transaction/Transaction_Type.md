---
id: Transaction_Type

title: Transaction_Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Transaction_Type

This is a lookup table for the Transaction_type_id Column in the table Transactions.

Transaction type related to the order execution type.			


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)'Contains transaction types'|
|`Name`|VARCHAR(45)|NULL|market;limit;all-or-none;fill-or-kill;stop limit; trailing stop|Transaction type name|
||
