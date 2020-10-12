---
id: Instrument_Type_Hierachy

title: Instrument_Type_Hierachy
---

## Data Dictionary - Entity Table: Instrument_Type_Hierachy

Financial instruments may be divided into two types: cash instruments and derivative instruments.
Cash Instruments.
Derivative Instruments.
Debt-Based Financial Instruments.
Equity-Based Financial Instruments

example:

|Asset class|.|Instrument type
|---|---|---|
|Debt (long term) > 1 year |Bonds	|Loans|
|Debt (short term) ≤ 1 year |Bills, e.g. T-bills Commercial paper| Deposits Certificates of deposit|
|Equity	|Stock|	N/A|
|Foreign exchange	|N/A	|Spot foreign exchange|

e.g: Stocks, Bonds, Cash, Annuities, Real Estate, Domestic, Hedge Funds, Mutual Funds, ETF's, Foreign, Options, Emerging Markets

Example of Capital Market and Money Market Hierachy:

|Capital Market|.|.|Money Market|
|---|---|---|---|
|Equity Market|Debt Market|.|Treasury Bills|
|Primary Market|.|.|Treasury Bills|
|Secondary Market|.|.|Call Money Market|
|Derivatives Market|.|.|Commercial Bills
|.|.|.|Certificate of Deposites

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Instrument_Type_Hierachy`|`id`|BIGINT(12)|PK, NN|.|
|`Instrument_Type_Hierachy`|`Parent_Instrument_Type`|BIGINT(12)|NULL|.|
|`Instrument_Type_Hierachy`|`Child_Instrument_Type`|BIGINT(12)|NULL|.|
|For Table: `Instrument_Type_Hierachy`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type_Parent`|(`Parent_Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
|`Instrument_Type_Child`|(`Child_Instrument_Type`)|`Instrument_Type` (`id`)| NO ACTION|NO ACTION|
|For Table: `Instrument_Type_Hierachy`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Child_idx`|`Instrument_Type_Hierachy`| (`Child_Instrument_Type` ASC)| VISIBLE|.|
|`Parent_idx` |`Instrument_Type_Hierachy` |(`Parent_Instrument_Type` ASC)| VISIBLE|.|
