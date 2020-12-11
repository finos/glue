---
id: Asset_Classification_Structure
title: Asset Classification Structure
hide_table_of_contents: true
---

## Data Dictionary- Table: Asset_Classification_Structure

Asset types hierarchy. Hierarchical view offers drill-down paths along different structures.

E.g., in single client / portfolio view as well as in multiple client view, the user has the possibility to see exposures 

according to the Asset Allocation, Region or Currency. The user can drill into the categories like those in GICS and combine several filters,

say, drill in selected region (Americas) and then apply filter Equities.
			

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
| id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`| BIGINT(12)| NULL|1|Top of hierarchy (parent) of asset classification|
|`Child` |BIGINT(12)| NULL|2|Under parent hierarchy (child) of asset classification|
|`Level`| INT| NULL|2|Layer of asset classification depth e.g:2|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE||
|`ACParent`|(`Parent`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
|`ACChild`|(`Child`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Node_idx`|`Asset_Classification_Structure`|(`Parent` ASC)|VISIBLE||
|`Child_idx`|`Asset_Classification_Structure`|(`Child` ASC)|VISIBLE||
||
