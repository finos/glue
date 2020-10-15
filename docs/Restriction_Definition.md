---
id: Restriction_Definition

title: Restriction_Definition
---

## Data Dictionary - Entity Table: Restriction_Definition

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Restriction_Definition`|`id`|BIGINT(12)|PK, NN|.|
|`Restriction_Definition`|`Restriction_Type`|BIGINT(12)|NULL|.|
|`Restriction_Definition`|`Operator`|ENUM("=", ">", "<", ">=", "<=", "<>") |NULL|.|
|`Restriction_Definition`|`Value`|VARCHAR(45)|NULL|.|
|For Table: `Restriction_Definition`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionType`|(`Restriction_Type`)|`Restriction_Type` (`id`)| NO ACTION|NO ACTION|
|For Table: `Restriction_Definition`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`id_idx`|`Restriction_Definition`|(`Restriction_Type` ASC)| VISIBLE|.|
