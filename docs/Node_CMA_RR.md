---
id: Node_CMA_RR

title: Node_CMA_RR
---

## Data Dictionary - Entity Table: Node_CMA_RR



| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Node_CMA_RR`|`id`|BIGINT(12)|PK, NN|.|
|`Node_CMA_RR`|`Node`|BIGINT(12)|NULL|.|
|`Node_CMA_RR`|`Risk_Type`|BIGINT(12)|NULL|.|
|`Node_CMA_RR`|`Risk_Assumption`|DECIMAL|NULL|.|
|`Node_CMA_RR`|`Return_Assumption`|DECIMAL|NULL|.|
|`Node_CMA_RR`|`Time_Horizon`|DATETIME|NULL|.|
|`Node_CMA_RR`|`CMA_Set`|BIGINT(12)|NULL|.|
|For Table: `Node_CMA_RR`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RRCMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|`RRCMANode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|For Table: `Node_CMA_RR`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`CMA_Set_idx`|`Node_CMA_RR`|(`CMA_Set` ASC) | VISIBLE|.|
|`Node_idx`|`Node_CMA_RR`|(`Node` ASC) | VISIBLE|.|
	
