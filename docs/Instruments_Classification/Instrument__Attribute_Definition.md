---
id: Instrument__Attribute_Definition

title: Instrument__Attribute_Definition
---

## Data Dictionary - Entity Table: Instrument__Attribute_Definition

**Instrument identifier type**

Instrument_Type`- Used to identify money account to counterbook trades


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`Instrument__Attribute_Definition` |`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Instrument__Attribute_Definition` |`Attribute_Name`|VARCHAR(45)|NULL|.|.|
|`Instrument__Attribute_Definition` |`Attribute_Type`|VARCHAR(45)|NULL|e.g: RIC, ISIN, CUSIP, SEDOL, Ticker, Valor, WKN.|.|
|`Instrument__Attribute_Definition` |`Instrument_Type`|BIGINT(12)|NULL|1|.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type`|(`Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Instrument_Type_idx` |`Instrument__Attribute_Definition` | (`Instrument_Type` ASC) | VISIBLE|.|
