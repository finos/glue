---
id: Instrument_Classification

title: Instrument_Classification
---

## Data Dictionary - Entity Table: Instrument_Classification

CLASSIFICATION OF FINANCIAL INSTRUMENTS (CFI) - ISO 10962

The structure of the CFI code:

The CFI reflects characteristics that are defined when a financial instrument is issued and remain unchanged during its entire lifetime

example:
The CFI consists of six alphabetical characters: The first character indicates the highest level of classification (categories).

| 1st character-Categories | 
|---|
|Equities (E)|
|Collective investment vehicles (C)|
|Debt instruments (D)|
|Entitlement (rights) (R)|
|Listed options (O)|
|Futures (F)|
|Swaps (S)|
|Non-listed and complex listed options (H)|
|Spot (I)|
|Forwards (J)|
|Strategies (K)|
|Financing (L)|
|Referential instruments (T)|
|Others (miscellaneous) (M)|
||
|2nd character = specific groups within each category (e.g. for equities)|
|Common/ordinary shares|
|Preferred/preference shares|
|Common/ordinary convertible shares|
|Preferred/preference convertible shares|
|Limited partnership units|
|Depositary receipts on equities|
|Structured instruments (participation)|
|Others (miscellaneous)|
||
|3rd to 6th character = important attributes to each group (e.g. for equities)|
|Voting right|
|Ownership/transfer restrictions|
|Payment status|
|Form|

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Instrument_Classification` |`id`|BIGINT(12)|PK, NN|.|
|`Instrument_Classification` |`Instrument`|BIGINT(12)|NULL|.|
|`Instrument_Classification` |`Node`|BIGINT(12)|NULL|.|
|For Table: `Instrument_Classification` |
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ACNode`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|`ACInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
|For Table: `Instrument_Classification` |
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_idx`|`Instrument_Classification`| (`Node` ASC)| VISIBLE|.|
|`Instrument_idx` |`Instrument_Classification`| (`Instrument` ASC)| VISIBLE|.|
