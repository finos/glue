---
id: Restriction_To_Set
title: Restriction To Set
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Restriction_To_Set

Mapping between restriction set and its constituents: separate restriction items. 
Many Restriction Sets can contain multiple Restrictions and also many Restrictions can take part in multiple Restriction sets. 	

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Resriction_Set`|BIGINT(12)|NULL|3|Restriction set id|
|`Restriction`|BIGINT(12)|NULL|1|Restriction id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Restriction_Set`|(`Restriction_Set`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`Restriction`|(`Restriction`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Restriction_Set_idx`|`Restriction_To_Set`|(`Restriction_Set` ASC)| VISIBLE|.|
|`Restriction_idx`|`Restriction_To_Set`|(`Restriction` ASC)| VISIBLE|.| 
||
