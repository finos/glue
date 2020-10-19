---
id: Restriction_to_Set

title: Restriction_to_Set
---

## Data Dictionary - Entity Table: Restriction_to_Set

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Restriction_to_Set`|`id`|BIGINT(12)|PK, NN|.|
|`Restriction_to_Set`|`Resriction_Set`|BIGINT(12)|NULL|.|
|`Restriction_to_Set`|`Restriction`|BIGINT(12)|NULL|.|
|For Table: `Restriction_to_Set`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionSet`|(`Restriction_Set`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
|`Restriction`|(`Restriction`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
|For Table: `Restriction_to_Set`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Restriction_Set_idx`|`Restriction_to_Set`|(`Restriction_Set` ASC)| VISIBLE|.|
|`Restriction_idx`|`Restriction_to_Set`|(`Restriction` ASC)| VISIBLE|.|
