---
id: Asset_Classification_Node
title: Asset_Classification_Node
---

## Data Dictionary - Entity Table: Asset_Classification_Node

The list of all asset classes. Official GICS structure for this view is used.

Industry view shows assets distributed across industries in order to explore the sector exposure of the clients. 

Regional view: clients' assets distributed across regions to explore the regional exposure. 

This is a hierarchical view depending on the regional classification schema. Several levels of regions can be supported.					

The GICS - Global Industry Classification Standard. GICS structure consists of 11 sectors, 24 industry groups, 69 industries, 158 sub-industries into which S&P has categorized all major public companies. 
 

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
| Asset_Classification_Node|`id`|BIGINT(12)|PK, NN|.|PrimaryKey-ID, Not Null (auto creates)|
| Asset_Classification_Node|`Node_Name`|VARCHAR(45)|NULL|Mid-cap equity|Asset class names i.e: Automotive, Mid-cap equity, Govn't bonds developed countries, Commodities, Energy|
| Asset_Classification_Node|`Regime`|BIGINT(12)|NULL|.|Type of classification id|
| Asset_Classification_Node|`Asset_Classification_Regime_Structurecol`|BIGINT(12)|NULL|.|.|
| Asset_Classification_Node|`Benchmark`|BIGINT(12)|NULL|.|.|
|For Table: Asset_Classification_Node|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|.|
| `Regime`|(`Regime`)|Asset_Classification_Regime (`id`)|NO ACTION| NO ACTION|.|
| `NodeBenchmark`|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|.|
| For Table: Asset_Classification_Node|
| CREATE INDEX|ON|ASC|VISABLE|.|.|
|`Regime_idx`|Asset_Classification_Node|(`Regime` ASC)|VISIBLE|.|.|
|`Benchmark_idx`|Asset_Classification_Node|(`Benchmark` ASC)|VISIBLE|.|.|


