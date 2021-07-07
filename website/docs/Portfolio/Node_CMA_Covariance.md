---
id: Node_CMA_Covariance
title: Node CMA Covariance
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Node_CMA_Covariance

Capital Market Assumptions (CMA) represent the risk and return assumptions for a distinct group of assets. 
CMA plays important role in the Strategic (SAA) and Tactic Asset Allocation (TAA). Table contains covariance/correlation between different asset classes. 
The main goal of this information is to help evaluating the risk that a portfolio holds (diversification of the risk).


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Node_1`|BIGINT(12)|NULL|1|Asset classification node id 1|
|`Node_2`|BIGINT(12)|NULL|2|Asset classification node id 2|
|`Covariance`|DECIMAL|NULL|-0.03|Covariance/correlation between different asset classes based on the CMA_Set. 1 = Perfectly correlated, -1 = no correlation.|
|`CMA_Set`|BIGINT(12)|NULL|1|CMA set id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Node_1`|(`Node_1`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`Node_2`|(`Node_2`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`RRNodeCMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Node_1_idx`|`Node_CMA_Covariance`|(`Node_1` ASC) | VISIBLE|.|
|`Node_2_idx`|`Node_CMA_Covariance`|(`Node_2` ASC) | VISIBLE|.|
|`CMA_Set_idx`|`Node_CMA_Covariance`|(`CMA_Set` ASC) | VISIBLE|.|
||

