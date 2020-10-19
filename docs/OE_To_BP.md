---
id: OE_To_BP

title: OE_To_BP
---

## Data Dictionary - Entity Table: OE_To_BP

Enter the OE- organizational entity to BP-Business Partner Type


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`OE_To_BP`|`id`|BIGINT(12)|PK, NN|.|
|`OE_To_BP`|`BP`|BIGINT(12)|NULL|.|
|`OE_To_BP`|`OE`|BIGINT(12)|NULL|.|
|`OE_To_BP`|`Relationship_Type`|BIGINT(12)|NULL|.|
|For Table: `OE_To_BP`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`BP_Relationship`|(`BP`)|`Business_Partner` (`id`)| NO ACTION|NO ACTION|
|`OE_Relationship`|(`OE`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
|`OE_To_BP_Type`|(`Relationship_Type`)|`OE_TO_BP_TYPE` (`id`)| NO ACTION|NO ACTION|
|For Table: `OE_To_BP`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`BP_idx`|`OE_To_BP`|(`BP` ASC) | VISIBLE|.|
|`OE_idx`|`OE_To_BP`|(`OE` ASC) | VISIBLE|.|
|`Type_idx`|`OE_To_BP`|(`Relationship_Type` ASC) | VISIBLE|.|
