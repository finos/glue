---
id: Instrument__Attribute_Definition
title: Instrument__Attribute Definition
---

## Data Dictionary - Entity Table: Instrument__Attribute_Definition

**Instrument identifier type. Different exchanges and information providers may have their own attributes. This table contains the list of these attributes and they are important 

when advisor decides to execute a transaction.**			


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Attribute_Name`|VARCHAR(45)|NULL||enter an Attribute Name|
|`Attribute_Type`|VARCHAR(45)|NULL|e.g: RIC, ISIN, CUSIP, SEDOL, Ticker, Valor, WKN.||
|`Instrument_Type`|BIGINT(12)|NULL|1|Instrument Type id,  see Insturment_Type Table|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type`|(`Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Instrument_Type_idx` |`Instrument__Attribute_Definition` | (`Instrument_Type` ASC) | VISIBLE||
||
