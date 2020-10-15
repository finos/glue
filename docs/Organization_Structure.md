---
id: Organization_Structure

title: Organization_Structure
---

## Data Dictionary - Entity Table: Organization_Structure

Organizational structure is a system used to define a hierarchy within an organization.

 Determine how information flows between levels within the organization.


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Organization_Structure`|`id`|BIGINT(12)|PK, NN|.|
|`Organization_Structure`|`Parent`|BIGINT(12)|NULL|.|
|`Organization_Structure`|`Child`|BIGINT(12)|NULL|.|
|`Organization_Structure`|`Level`|INT|NULL|.|
|For Table: `Organization_Structure`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ParentOE`|(`Parent`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
|`ChildOE`|(`Child`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
|For Table: `Organization_Structure`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`Organization_Structure`|(`Parent` ASC) | VISIBLE|.|
|`Child_idx`|`Organization_Structure`|(`Child` ASC) | VISIBLE|.|
