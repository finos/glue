---
id: Instrument

title: Instrument
---

## Data Dictionary - Entity Table: `Instrument` 

**The table contains the list of all financial instruments available for investment and trading.**

**This is what the advisor and client can use for investing.** 

**The table is tightly related to Portfolio and shows the composition of client holdings.**


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|2|PrimaryKey-ID, Not Null (auto creates)|	
|`Name`|VARCHAR(45)|NULL|Real Estate Select Sector SPDR Fund; GBP; General Electric Co; Alfa Bond Issuance PLC_7.75_28/04/2021; IQ Hedge Multi-Strategy Tracker ETF| Enter specific instuments, not asset classes|
|`Type`|BIGINT(12)|NULL|1|Used to identify money account to counterbook trades. See Instrument_Type Table|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`InstrumentType`|(`Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Type_idx`|`Instrument`| (`Type` ASC)| VISIBLE|.|
