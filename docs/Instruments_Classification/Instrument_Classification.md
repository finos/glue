---
id: Instrument_Classification

title: Instrument_Classification
---

## Data Dictionary - Entity Table: Instrument_Classification

**The map between instrument id and asset class (node)**



| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Instrument`|BIGINT(12)|NULL|example Equities|1|instrument id|.|
|`Node`|BIGINT(12)|NULL|2|.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ACNode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`ACInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_idx`|`Instrument_Classification`| (`Node` ASC)| VISIBLE|.|
|`Instrument_idx` |`Instrument_Classification`| (`Instrument` ASC)| VISIBLE|.|
