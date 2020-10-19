---
id: Node_CMA_Covarianz

title: Node_CMA_Covarianz
---

## Data Dictionary - Entity Table: Node_CMA_Covarianz


**Question: Is this to do with; Restart strategy helps the covariance matrix adaptation evolution strategy (CMA-ES)

 to increase the probability of finding the global optimum in optimization, while a single run CMA-ES is easy to be trapped

 in local optima. **

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Node_CMA_Covarianz`|`id`|BIGINT(12)|PK, NN|.|
|`Node_CMA_Covarianz`|`Node_1`|BIGINT(12)|NULL|.|
|`Node_CMA_Covarianz`|`Node_2`|BIGINT(12)|NULL|.|
|`Node_CMA_Covarianz`|`Covarianz`|DECIMAL|NULL|.|
|`Node_CMA_Covarianz`|`CMA_Set`|BIGINT(12)|NULL|.|
|For Table: `Node_CMA_Covarianz`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Node_1`|(`Node_1`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`Node_2`|(`Node_2`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`RRNodeCMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|For Table: `Node_CMA_Covarianz`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_1_idx`|`Node_CMA_Covarianz`|(`Node_1` ASC) | VISIBLE|.|
|`Node_2_idx`|`Node_CMA_Covarianz`|(`Node_2` ASC) | VISIBLE|.|
|`CMA_Set_idx`|`Node_CMA_Covarianz`|(`CMA_Set` ASC) | VISIBLE|.|
