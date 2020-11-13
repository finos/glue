---
id: Asset_Classification_Structure
title: Asset_Classification_Structure
---

## Data Dictionary- Table: Asset_Classification_Structure

<div class="text-white bg-blue mb-2"> Asset types hierarchy. Hierarchical view offers drill-down paths along the GICS structure. </div>
 

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
| id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`| BIGINT(12)| NULL|1|Top of hierarchy (parent) of asset classification|
|`Child` |BIGINT(12)| NULL|2|Under parent hierarchy (child) of asset classification|
|`Level`| INT| NULL|2|Layer of asset classification depth|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|.|
|`ACParent`|(`Parent`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
|`ACChild`|(`Child`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_idx`|`Asset_Classification_Structure`|(`Parent` ASC)|VISIBLE|.|
|`Child_idx`|`Asset_Classification_Structure`|(`Child` ASC)|VISIBLE|.|
