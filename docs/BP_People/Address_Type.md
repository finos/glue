---
id: Address_Type
title: Address_Type
---

## Data Dictionary : Entity Table Address_Type

This table allows to distinguish between multiple address types (assigned to one person)
 
that can be further used for different purposes, e.g. business, home address, mailing address, secondary,

address for tax purposes, etc.  (Please populate with your address type values.)

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
|`Id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|Null|business, home|Name of Address Type cannot exceed 45 characters in length|
||
