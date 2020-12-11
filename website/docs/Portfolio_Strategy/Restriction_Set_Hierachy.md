---
id: Restriction_Set_Hierachy
title: Restriction Set Hierachy
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Restriction_Set_Hierachy

Restriction sets are hierarchical items and user can drill-down across them in health check (diagnostics) view,

 e.g. first set of restrictions on group of instruments concentration, then drill-down to sub-groups of instruments etc.			


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Top of hierarchy (parent)|
|`Child`|BIGINT(12)|NULL|2|Under parent hierarchy (child)|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionSetParent`|(`Parent`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`RestrictionSetChild`|(`Child`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Parent_idx`|`Restriction_Set_Hierachy`|(`Parent` ASC)| VISIBLE||
|`Child_idx`|`Restriction_Set_Hierachy`|(`Child` ASC)| VISIBLE||
||
