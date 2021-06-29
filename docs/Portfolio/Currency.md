---
id: Currency

title: Currency
---

## Data Dictionary - Entity Table: Currency

Table with currency names. This information is essential evaluate the currency exposure and also to define the Currency Risk and the Trade Currency. Best practice is to use ISO 4217 for standard currency codes. 
The type of currency code which is maintained in the table can be defined by the Currency_Identifier table. 
ISO 4217 maintaince 2 types of currency codes: alphabetic code and numeric code.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|2|Contains the identifier of currency objects|
|`Name`|VARCHAR(45)|NULL|EUR, 978|Currency code as per ISO4217|
||
