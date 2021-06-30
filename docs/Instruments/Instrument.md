---
id: Instrument

title: Instrument
---

## Data Dictionary - Entity Table: Instrument
Instrument table represents the security master, containing the entire universe of financial products available for investment and trading. All positions and transactions are associated with an instrument from this table. 
Additional information for the instruments, such as identification codes (ISIN, SEDOL, CUSIP, etc.) and product specific metrics (yield, maturity, etc.) can be found in the associated tables Instrument_Attribute_Value and Instrument_Attribute_Definition.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|2|PrimaryKey-ID, Not Null (auto creates)|	
|`Name`|VARCHAR(45)|NULL|"General Electric Co", "Alfa Bond Issuance PLC_7.75_28/04/2021", "IQ Hedge Multi-Strategy Tracker ETF"|Name of the instrument. NB! There are no constraints to enforce referential integrity across Instrument and Instrument_Attribute tables. This allows duplicate Instruments to be created. We recommend the user to establish operational process or naming conventions to minimize issues resulting from duplicates.|
|`Type`|BIGINT(12)|NULL|1|While an Instrument can belong to many Asset Classification schemes, instrument type ( Equity, Bond, Real Estate, etc.) defines internal classification which typically drives operational processes, regulations and rules around the trading and reporting of such assets. This information is tightly linked to Instrument_Attributes, so that specific attributes and metrics for each instrument type maintained. Similar information re Asset types can be hold in the Asset_Classification structure of tables. However, user should be mindful for inconsistency in the data.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`InstrumentType`|(`Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Type_idx`|`Instrument`| (`Type` ASC)| VISIBLE|.|
||
|CREATE UNIQUE INDEX|ON|ASC|VISIBLE|.|
|`Name_UNIQUE`|`Instrument`| (`Name` ASC)| VISIBLE|Prevents duplication of Instruments|
||
