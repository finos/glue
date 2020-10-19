---
id: Instrument__Attribute_Definition

title: Instrument__Attribute_Definition
---

## Data Dictionary - Entity Table: Instrument__Attribute_Definition

**To provide additional information about the Financial Instrument. (Name, Type)**

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



| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Instrument__Attribute_Definition` |`id`|BIGINT(12)|PK, NN|.|
|`Instrument__Attribute_Definition` |`Attribute_Name`|VARCHAR(45)|NULL|.|
|`Instrumnt__Attribute_Definition` |`Attribute_Type`|VARCHAR(45)|NULL|.|
|`Instrument__Attribute_Definition` |`Instrument_Type`|BIGINT(12)|NULL|.|
|For Table: `Instrument__Attribute_Definition` |
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type`|(`Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
|For Table: `Instrument__Attribute_Definition` |
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Instrument_Type_idx` |`Instrument__Attribute_Definition` | (`Instrument_Type` ASC) | VISIBLE|.|

