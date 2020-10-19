---
id: Portfolio_Structure

title: Portfolio_Structure
---

## Data Dictionary - Entity Table: Portfolio_Structure


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Portfolio_Structure`|`id`|BIGINT(12)|PK, NN|.|
|`Portfolio_Structure`|`Parent`|BIGINT(12)|NULL|.|
|`Portfolio_Structure`|`Child`|BIGINT(12)|NULL|.|
|For Table: `Portfolio_Structure`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ParentPortfolio`|(`Parent`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`ChildPortfolio`|(`Child`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|For Table: `Portfolio_Structure`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`Portfolio_Structure`|(`Parent` ASC)| VISIBLE|.|
|`Child_idx`|`Portfolio_Structure`|(`Child` ASC)  | VISIBLE|.|
