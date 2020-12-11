---
id: Instrument_Classification
title: Instrument Classification
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Instrument_Classification

**The map between instrument id and asset class (node)**
**One instrument can belong to different asset class nodes since there are multi-dimensional classifications.**
**E.g: some instrument X can represent Energy industry and be Equity**		


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Instrument`|BIGINT(12)|NULL|2|instrument id|
|`Node`|BIGINT(12)|NULL|2||
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ACNode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`ACInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Node_idx`|`Instrument_Classification`| (`Node` ASC)| VISIBLE||
|`Instrument_idx` |`Instrument_Classification`| (`Instrument` ASC)| VISIBLE||
||
