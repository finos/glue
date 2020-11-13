---
id: Instrument_Type_Hierachy

title: Instrument_Type_Hierachy
---

## Data Dictionary - Entity Table: Instrument_Type_Hierachy

Instrument type hierarchy. Under this view user can drill-down along instrument classification path and explore portfolio(s) structure.

To create a hierarchy tree within the Instrument_Type (Parent and Child Level)

Example of Capital Market and Money Market Hierachy:

|Capital Market|.|.|Money Market|
|---|---|---|---|
|Equity Market|Debt Market|.|Treasury Bills|
|Primary Market|.|.|Treasury Bills|
|Secondary Market|.|.|Call Money Market|
|Derivatives Market|.|.|Commercial Bills
|.|.|.|Certificate of Deposites

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Examples|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent_Instrument_Type`|BIGINT(12)|NULL|1|Top of hierarchy (parent)|
|`Instrument_Type_Hierachy`|`Child_Instrument_Type`|BIGINT(12)|NULL|1|Under parent hierarchy (child)|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type_Parent`|(`Parent_Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
|`Instrument_Type_Child`|(`Child_Instrument_Type`)|`Instrument_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Child_idx`|`Instrument_Type_Hierachy`| (`Child_Instrument_Type` ASC)| VISIBLE|.|
|`Parent_idx` |`Instrument_Type_Hierachy` |(`Parent_Instrument_Type` ASC)| VISIBLE|.|

