---
id: Restriction_Set_Hierachy

title: Restriction_Set_Hierachy
---

## Data Dictionary - Entity Table: Restriction_Set_Hierachy

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Restriction_Set_Hierachy`|`id`|BIGINT(12)|PK, NN|.|
|`Restriction_Set_Hierachy`|`Child`|BIGINT(12)|NULL|.|
|`Restriction_Set_Hierachy`|`Parent`|BIGINT(12)|NULL|.|
|For Table: `Restriction_Set_Hierachy`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionSetParent`|(`Parent`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`RestrictionSetChild`|(`Child`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|For Table: `Restriction_Set_Hierachy`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Child_idx`|`Restriction_Set_Hierachy`|(`Child` ASC)| VISIBLE|.|
