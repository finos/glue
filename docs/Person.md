---
id: Person

title: Person
---

## Data Dictionary - Entity Table: Person

PII - Personally identifiable information

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Person`|`id`|BIGINT(12)|PK, NN|.|
|`Person`|`Person_Type`|BIGINT(12)|NULL|.|
|`Person`|`Nick_Name`|VARCHAR(45)|NULL|.|
|`Person`|`PII`|BIGINT(12)|NULL|.|
|For Table: `Person`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Person_Type`|(`Person_Type`)|`Person_Type` (`id`)| NO ACTION|NO ACTION|
|`PII`|(`PII`)|`Person_PII` (`id`)| NO ACTION|NO ACTION|
|For Table: `Person`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Type_idx`|`Person`|(`Person_Type` ASC) | VISIBLE|.|
|`PII_idx`|`Person`|(`PII` ASC) | VISIBLE|.|
