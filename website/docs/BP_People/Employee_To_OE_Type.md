---
id: Employee_To_OE_Type

title: Employee To OE Type
---

## Data Dictionary - Entity Table: Employee_To_OE_Type

This is a lookup table for the Employee to OE Relationship Type column in the table Employee to OE Table.

Enter the Name of the Relationship Type of the Employee to OE - Organizational Entity.

e.g: Member, Supervisor, etc.


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`Employee_To_OE_Type`|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Employee_To_OE_Type`|`Name`|VARCHAR(45)|NULL|Member|Name of the Employe and OE relationship|
||
