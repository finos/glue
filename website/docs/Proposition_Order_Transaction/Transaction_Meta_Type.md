---
id: Transaction_Meta_Type
title: Transaction Meta Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Transaction_Meta_Type

Transaction metatype represents a category for different types of operations that can affect a position. 
This may be related to fills or orders, but could also represent external cash flows or corporate actions. 
This is a lookup table for the transaction_meta_type_id column in the Transactions Table.			


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)Contains transaction meta types|
|`Name`|BIGINT(12)|NOT NULL|buy; sell; dividends; coupon|Name of the transaction meta type'|
||