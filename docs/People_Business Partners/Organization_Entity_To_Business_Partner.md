---
id: Organization_Entity_To_Business_Partner
title: Organization_Entity_To_Business_Partner
---

## Data Dictionary - Entity Table: OE_To_BP

Contains all the relations between Business Partners and divisions/teams within the Organization. 				

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Business_Partner`|BIGINT(12)|NULL|.|12|Business Partner id|
|`Organizational_Entity`|BIGINT(12)|NULL|.|132|Organizational Entity id|
|`Relationship_Type`|BIGINT(12)|NULL|33|Relationship Type id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`BP_Relationship`|(`Business_Partner`)|`Business_Partner` (`id`)| NO ACTION|NO ACTION|
|`OE_Relationship`|(`Organizational_Entity`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
|`OE_To_BP_Type`|(`Relationship_Type`)|`Organization_Entity_To_Business_Partner_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`BP_idx`|`OE_To_BP`|(`Business_Partner` ASC) | VISIBLE|.|
|`OE_idx`|`OE_To_BP`|(`Organizational_Entity` ASC) | VISIBLE|.|
|`Type_idx`|`OE_To_BP`|(`Relationship_Type` ASC) | VISIBLE|.|
||
