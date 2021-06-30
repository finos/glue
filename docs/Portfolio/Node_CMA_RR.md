---
id: Node_CMA_RR

title: Node_CMA_RR
---

## Data Dictionary - Entity Table: Node_CMA_RR

Capital Market Assumptions (CMA) represent the risk and return assumptions for a distinct group of assets. CMA plays important role in the Strategic (SAA) and Tactic Asset Allocation (TAA).
This table holds the expected Risk and Return assosiated with the selected Capital Market Assumption Set.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Node`|BIGINT(12)|NULL|1|Asset classification node|
|`Risk_Type`|BIGINT(12)|NULL|1|Risk type id, e.g. name may be related to investment strategy risk type: Yield, Income, Balanced, Growth, Equity.|
|`Risk_Assumption`|DECIMAL|NULL|0.8|Expected Risk assosiated with CMA_Set|
|`Return_Assumption`|DECIMAL|NULL|0.14|Expected Return from CMA_Set|
|`Time_Horizon`|DATETIME|NULL|12/31/2030 12:00|End date of the period for which Expected Return and Expected Risk are calculated. Usually 5 or 10 Year periods|
|`CMA_Set`|BIGINT(12)|NULL|1|CMA set id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RRCMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|`RRCMANode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`CMA_Set_idx`|`Node_CMA_RR`|(`CMA_Set` ASC) | VISIBLE|.|
|`Node_idx`|`Node_CMA_RR`|(`Node` ASC) | VISIBLE|.|
||	
