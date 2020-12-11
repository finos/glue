---
id: Restriction_Definition
title: Restriction Definition
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Restriction_Definition

This table define the restriction in the form that some metric,

e.g: weight of the instrument should not exceed specified share. If it is violated,

then respective warning may be shown to client advisor in the diagnostics (health check) view			



| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Restriction_Type`|BIGINT(12)|NULL|1|Restriction type id|
|`Operator`|ENUM("=", "&gt;", "&lt;", "&gt;=", "&lt;=", "&lt;&gt;") |NULL|&lt;=|Operator of the restriction|
|`Value`|VARCHAR(45)|NULL|0.02|Restrictions threshold, e.g. <= 0.02|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionType`|(`Restriction_Type`)|`Restriction_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`id_idx`|`Restriction_Definition`|(`Restriction_Type` ASC)| VISIBLE||
||
