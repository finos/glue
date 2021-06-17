---
id: Asset_Classification_Structure
title: Asset_Classification_Structure
---

## Data Dictionary- Table: Asset_Classification_Structure

Asset Classification represents groups of instruments with similar financial characteristics, similar behavior in the markets or placed under similar regulations. 
Best practice for portfolio management relies on Strategic Asset Allocation and Tactical Asset Allocation to maintain a diversified portfolio with balanced risk and reward (as defined by MPT). 
In Glue, the Asset Classification tables permit the creation of arbitrary asset groups, e.g based on financial instrument, region, industry sector, etc, which can be hierarchicly structured.  The Asset_Classification_Structure table defines the hierarchy between different asset classification nodes (Asset_Classification_Node table).
					
 

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
| `id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`| BIGINT(12)| NULL|1|Id for the top node of hierarchy (parent) of asset classification (from Asset_Classification_Node). Recommended is to store only the direct relationships between parent node and child node, not the indirect relationships (in case the depth > 2)|
|`Child` |BIGINT(12)| NULL|2|Id for the underlying node in the hierarchy (child) of asset classification (from Asset_Classification_Node). More than one child node can be associated with parent node.|
|`Level`| INT| NULL|2|Layer of asset classification depth e.g:2|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|.|
|`ACParent`|(`Parent`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
|`ACChild`|(`Child`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_idx`|`Asset_Classification_Structure`|(`Parent` ASC)|VISIBLE|.|
|`Child_idx`|`Asset_Classification_Structure`|(`Child` ASC)|VISIBLE|.|
