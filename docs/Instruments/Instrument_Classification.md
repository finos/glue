---
id: Instrument_Classification

title: Instrument_Classification
---

## Data Dictionary - Entity Table: Instrument_Classification

One instrument can belong to multiple asset class nodes. 
Instrument_Classification table provides the link between Asset Classification Nodes and the Instrument.  
E.g., instrument X can be Energy industry and Equity. This classification helps maintanence of balanced portfolio and build the investment startegy for each invesor (Strategic Asset Allocation and Tactical Asset Allocation).	


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Instrument`|BIGINT(12)|NULL|2|Instrument id|
|`Node`|BIGINT(12)|NULL|2|Asset Classification Node Id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ACNode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`ACInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_idx`|`Instrument_Classification`| (`Node` ASC)| VISIBLE|.|
|`Instrument_idx` |`Instrument_Classification`| (`Instrument` ASC)| VISIBLE|.|
||