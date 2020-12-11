---
id: Instrument_Type
title: Instrument Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: `Instrument_Type`

**This is a lookup table for the Instrument Type column in the Instrument Table and in the Instrument__Attribute_Definition Table.** 

List of instrument types used for view of client portfolio(s) by different asset classes. 

Can be also combined into complex filter like advisor can see municipal bonds for the United states

(regional classification present in Asset Classification table).	

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Municipal bonds, cash account, real estate|Name of the Instrument_Type. Used to identify money account to counterbook trades|
||
