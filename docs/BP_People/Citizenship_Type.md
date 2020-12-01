---
id: Citizenship_Type

title: Citizenship_Type
---

## Data Dictionary - Entity Table: `Citizenship_Type

This is a lookup table for Citizenship_Type column in the table Citizenship. There could be different types of citizenships.

For example, by birth, naturalized, by marriage, by investment, etc. They impose different regulatory rules on the clients and their portfolios.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)|NULL|By investment|Name of citizenship Type |
||
