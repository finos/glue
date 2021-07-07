---
id: Risk_Type
title: Risk Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Risk_Type

We assume that banks will allocate customers to predefined risk categories based on their investment experience and objectives. 
Risk_Type table contains information regarding this internally defined risk categories.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|BIGINT(12)|NULL|Growth, Yield, Balance|Type of the risk|
||
