---
id: Person

title: Person
---

## Data Dictionary - Entity Table: Person

The Person type defines the modelling of individuals, legal persons and entities, separating personal and business relationship

data for an entity. The Person represents the person behind the business relationship.

PII - Personally identifiable information

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Person_Type`|BIGINT(12)|NULL|7|Person Type id. See- Person Type table|
|`Nick_Name`|VARCHAR(45)|NULL|client1|Nick Name upto 45 characters|
|`PII`|BIGINT(12)|NULL|1|Id of the record in Person PII - Personally identifiable information table|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|.|
|`Person_Type`|(`Person_Type`)|`Person_Type` (`id`)| NO ACTION|NO ACTION|
|`PII`|(`PII`)|`Person_PII` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Type_idx`|`Person`|(`Person_Type` ASC) | VISIBLE|.|
|`PII_idx`|`Person`|(`PII` ASC) | VISIBLE|.|
||
