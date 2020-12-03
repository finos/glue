---
id: Currency_Identifier

title: Currency_Identifier
---

## Data Dictionary - Entity Table: Currency_Identifier

Enter the Currency Identifier code & type

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID (auto creates),'Contains the external identifier of credit limits'|
|`currency_id`|BIGINT(12)|NotNull| 2|Relates to Currency Table|
|`currency_identifier_type_id`|BIGINT(12)|NotNull|12|See Currency_Identifier_Type Table|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Identifier_Currency`|(`currency_id`)|`Currency` (`id`)|NO ACTION|NO ACTION|
|`currency_identifier_type_id`|(`currency_identifier_type_id`)|`Currency_Identifier_Type` (`id`)|NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`currency_id_idx`|`Currency_Identifier`|(`currency_id` ASC)|VISIBLE|.|
|`currency_identifier_type_id_idx`|`Currency_Identifier`|(`currency_identifier_type_id` ASC)|VISIBLE|.|
||
