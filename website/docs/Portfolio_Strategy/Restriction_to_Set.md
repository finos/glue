---
id: Restriction_to_Set
title: Restriction to Set
---

## Data Dictionary - Entity Table: Restriction_to_Set

Mapping between restriction set and its constituents: separate restriction items		

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Resriction_Set`|BIGINT(12)|NULL|3|Restriction set id|
|`Restriction`|BIGINT(12)|NULL|1|Restriction id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Restriction_Set`|(`Restriction_Set`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
|`Restriction`|(`Restriction`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Restriction_Set_idx`|`Restriction_to_Set`|(`Restriction_Set` ASC)| VISIBLE||
|`Restriction_idx`|`Restriction_to_Set`|(`Restriction` ASC)| VISIBLE|| 
||
