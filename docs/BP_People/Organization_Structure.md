---
id: Organization_Structure

title: Organization_Structure
---

## Data Dictionary - Entity Table: Organization_Structure

Define the Hierarchical structure of your organizations. Supports view of client's assets aggregated across various organizational levels, 

 in order to assess where the assets are booked.
 
 You can determine how information flows between levels within the organization.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Top of hierarchy (parent)|
|`Child`|BIGINT(12)|NULL|4|Under parent hierarchy (child)|
|`Level`|INT|NULL|2|Level of ogranizational unit|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ParentOE`|(`Parent`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
|`ChildOE`|(`Child`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`Organization_Structure`|(`Parent` ASC) | VISIBLE|.|
|`Child_idx`|`Organization_Structure`|(`Child` ASC) | VISIBLE|.|
