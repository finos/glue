---
id: Instrument_Type

title: Instrument_Type
---

## Data Dictionary - Entity Table: Instrument_Type

This is a lookup table for the Instrument type column in the Instrument table. 
The table holds the possibile Instrument types (Equity, Bond, Real Estate, etc.) and it is associated with the Instrument Attributes specific to each instrument type. 
Instrument type and tables related to it serve internal purposes such as: operational processes, regulations and rules around the trading and reporting of such assets.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Equities, Bonds, Commodities, Cash, Real Estate.|Name of the Instrument_Type|
||
