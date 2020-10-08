---
id: Currency_Identifier

title: Currency_Identifier
---

## Data Dictionary:  Entity Table: Currency_Identifier

Enter the Currency Identifier code

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Currency_Identifier`|`id`|BIGINT(12)|PK, NN|COMMENT 'Contains the external identifier of credit limits'|
|`Currency_Identifier`|`currency_id`|BIGINT(12)|NN|.|
|`Currency_Identifier`|`currency_identifier_type_id`|BIGINT(12)|NN|.|
|For Table: `Currency_Identifier`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Identifier_Currency`|(`currency_id`)|`Currency` (`id`)|NO ACTION|NO ACTION|
|`currency_identifier_type_id`|(`currency_identifier_type_id`)|`Currency_Identifier_Type` (`id`)|NO ACTION|NO ACTION|
|For Table: `Currency_Identifier`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`currency_id_idx`|`Currency_Identifier`|(`currency_id` ASC)|VISIBLE|.|
|`currency_identifier_type_id_idx`|`Currency_Identifier`|(`currency_identifier_type_id` ASC)|VISIBLE|.|
