---
id: Currency_Identifier
title: Currency Identifier
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Currency_Identifier

This table links Currency and Currency identifier types. Best practice is to use ISO 4217 for standard currency codes. 
The type of currency code which is maintained in the table can be defined by the Currency_Identifier table. 
ISO 4217 maintaince 2 types of currency codes: alphabetic code and numeric code.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID (auto creates),Contains the external identifier of credit limits|
|`currency_id`|BIGINT(12)|NotNull| 2|Relates to Currency Table|
|`currency_identifier_ type_id`|BIGINT(12)|NotNull|12|See Currency_Identifier_Type Table|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Identifier_Currency`|(`currency_id`)|`Currency` (`id`)|NO ACTION|NO ACTION|
|`currency_identifier_ type_id`|(`currency_identifier_ type_id`)|`Currency_Identifier_Type` (`id`)|NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`currency_id_idx`|`Currency_Identifier`|(`currency_id` ASC)|VISIBLE|.|
|`currency_identifier_ type_id_idx`|`Currency_Identifier`|(`currency_identifier_ type_id` ASC)|VISIBLE|.|
||
