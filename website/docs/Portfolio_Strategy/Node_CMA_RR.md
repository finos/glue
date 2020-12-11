---
id: Node_CMA_RR
title: Node CMA RR
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Node_CMA_RR

The Competition and Markets Authority (CMA)


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Node`|BIGINT(12)|NULL|1|Asset classification node|
|`Risk_Type`|BIGINT(12)|NULL|1|Risk type id, e.g. name may be related to investment strategy risk type: Yield, Income, Balanced, Growth, Equity. Or could be like volatility, VAR, etc|
|`Risk_Assumption`|DECIMAL|NULL|0.8|Risk assumption according to IPS, investment strategy, asset class or benchmark|
|`Return_Assumption`|DECIMAL|NULL|0.14|Return assumption according to IPS, investment strategy, asset class or benchmark|
|`Time_Horizon`|DATETIME|NULL|12/31/2030 12:00|Investment horizon|
|`CMA_Set`|BIGINT(12)|NULL|1|CMA set id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RRCMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|`RRCMANode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`CMA_Set_idx`|`Node_CMA_RR`|(`CMA_Set` ASC) | VISIBLE||
|`Node_idx`|`Node_CMA_RR`|(`Node` ASC) | VISIBLE||
||	
