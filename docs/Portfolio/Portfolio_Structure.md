---
id: Portfolio_Structure

title: Portfolio_Structure
---

## Data Dictionary - Entity Table: Portfolio_Structure

The hierarchical structure maintained in Portfolio_Structure table allows maintanence of portfolios and sub-portfolios. 
For example a client can have general portfolio including different asset classes and this portfolio can be divided to sub-portfolios based on each asset class. 
This allows sub-portfolios to be managed entirely separately including optimization and rebalancing possibly even by differnet portfolio managers and with different strategies.			

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Id of Portfolio on the Top of hierarchy (parent). One portfolio can be linked to multiple sub-portfolios.|
|`Child`|BIGINT(12)|NULL|2|Id of Portfolio on the bottom of the hierarchy (child) - sub-portfolio.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ParentPortfolio`|(`Parent`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`ChildPortfolio`|(`Child`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`Portfolio_Structure`|(`Parent` ASC)| VISIBLE|.|
|`Child_idx`|`Portfolio_Structure`|(`Child` ASC)  | VISIBLE|.|
||
