---
id: Address_Type
title: Address_Type
---

## Data Dictionary : Entity Table Address_Type

Under the table: Address_Type and column: Name, cannot exceed 45 characters in length. 

Can add a different Name, Department Name, Building Name, etc.

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|
||
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|
|---|---|---|---|
|Address_Type|`Id` |BIGINT(12)|PK, NN|
|Address_Type|`Name`|VARCHAR(45)|Null|

