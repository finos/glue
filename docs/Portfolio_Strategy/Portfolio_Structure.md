---
id: Portfolio_Structure

title: Portfolio_Structure
---

## Data Dictionary - Entity Table: Portfolio_Structure

**Client portfolio may have hierarchical structure, e.g. by type of mandate parent portfolio may consists of the following three child portfolios:**
- portfolio with Advisory Mandate
- portfolio with ExecutionOnly Mandate
- portfolio with Discretionary Mandate			

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Top of hierarchy (parent)|
|`Child`|BIGINT(12)|NULL|2|Under parent hierarchy (child)|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ParentPortfolio`|(`Parent`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`ChildPortfolio`|(`Child`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`Portfolio_Structure`|(`Parent` ASC)| VISIBLE|.|
|`Child_idx`|`Portfolio_Structure`|(`Child` ASC)  | VISIBLE|.|
||
