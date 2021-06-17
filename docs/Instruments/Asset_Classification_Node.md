---
id: Asset_Classification_Node

title: Asset_Classification_Node
---

## Data Dictionary - Entity Table: Asset_Classification_Node

Asset Classification represents groups of instruments with similar financial characteristics, similar behavior in the markets or placed under similar regulations. 
Best practice for portfolio management relies on Strategic Asset Allocation and Tactical Asset Allocation to maintain a diversified portfolio with balanced risk and reward (as defined by MPT). 
In Glue, the Asset Classification tables permit the creation of arbitrary asset groups, e.g. based on financial instrument, region, industry sector, etc., which can be hierarchically structured. 
The Asset_Classification_Node table holds the node of the asset group hierarchy, i.e Equity -> Stock -> Preferred Stocks.  

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Node_Name`|VARCHAR(45)|NULL|Mid-cap equity|Name of the exposure node i.e: Automotive, Mid-cap equity, Govn't bonds developed countries, Commodities, Energy|
|`Regime`|BIGINT(12)|NULL|3|Regime of classification id. Reference to Asset_Classification_Regime table|
|`Benchmark`|BIGINT(12)|NULL|1|Column is a reference to Benchmark Table. For each node specific Benchmark can be choosen (which should be applicable to the entire tree beneath the node). This is supposed to ease the choice of Benchmarks for a clients investment strategy but if not applicable the column can remain NULL.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
| `Regime`|(`Regime`)|Asset_Classification_Regime (`id`)|NO ACTION| NO ACTION|
| `NodeBenchmark``|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|
||
|`Regime_idx`|Asset_Classification_Node|(`Regime` ASC)|VISIBLE|.|
|`Benchmark_idx`|Asset_Classification_Node|(`Benchmark` ASC)|VISIBLE|.|
||

