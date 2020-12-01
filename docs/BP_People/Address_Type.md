---
id: Address_Type

title: Address_Type
---

## Data Dictionary : Entity Table Address_Type

This is a lookup table for the Address_type column in the table Address.

This table allows us to distinguish different address types (assigned to one person or organization) that can be used for different purposes, 

e.g: business, home address, mailing address, secondary, address for tax purposes etc.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
|`Id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|Null|business, home|Name of Address Type cannot exceed 45 characters in length|
||
