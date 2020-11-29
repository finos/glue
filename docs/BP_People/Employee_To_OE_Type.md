---
id: Employee_To_OE_Type

title: Employee_To_OE_Type
---

## Data Dictionary - Entity Table: Employee_To_OE_Type

Enter the Name of the Relationship Types of the Employee to Organizational Entity.

e.g: Member, Supervisor, etc.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`Employee_To_OE_Type`|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Employee_To_OE_Type`|`Name`|VARCHAR(45)|NULL|Member|Name of the Employe and OE relationship|
||
