---
id: Currency_Identifier_Type
title: Currency Identifier Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Currency_Identifier_Type

Defines the possible Currency Identifier types.  
Best practice is to use ISO 4217 for standard currency codes. The type of currency code which is maintained in the table can be defined by the Currency_Identifier table.
ISO 4217 maintaince 2 types of currency codes: alphabetic code and numeric code.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|12|PrimaryKey-ID (auto creates)Contains the currency identifier types|
|`Identifier`|VARCHAR(45)|NULL|Alphabetic, Numeric|Identifier type based on ISO 4217|
||

