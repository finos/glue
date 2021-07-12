---
id: Organization_Structure
title: Organization Structure
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Organization_Structure

This table helps defining the hierarchical structure of your Organization.  
The purpose of the Organizational Structure is to:
• Provide a dedicated framework which will map the responsibilities of a bank employee in internal bank processes to the data of the logged-in user. 
Such mapping extends not only to individual employees but to the entire organization of departments and teams.
• Derive security based on the organizational structure without additional need for customization.
• Use the organizational structure to provide reports for every organizational entity in the bank.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Parent organizational entity structure|
|`Child`|BIGINT(12)|NULL|4|Child organisational entity|
|`Level`|INT|NULL|2|Level of ogranizational unit|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ParentOE`|(`Parent`)|`Organizational_Entity` (`id`)| NO ACTION|NO ACTION|
|`ChildOE`|(`Child`)|`Organizational_Entity` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Parent_idx`|`Organization_Structure`|(`Parent` ASC) | VISIBLE|.|
|`Child_idx`|`Organization_Structure`|(`Child` ASC) | VISIBLE|.|
||

  

