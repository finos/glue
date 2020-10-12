---
id: Instrument_Type

title: Instrument_Type
---

## Data Dictionary - Entity Table: `Instrument_Type`

Enter the Name of the `Instrument_Type` 

Financial instruments may be divided into two types: cash instruments and derivative instruments.
Cash Instruments.
Derivative Instruments.
Debt-Based Financial Instruments.
Equity-Based Financial Instruments

e.g: Stocks, Bonds, Cash, Annuities, Real Estate, Domestic, Hedge Funds, Mutual Funds, ETF's, Foreign, Options, Emerging Markets

example:

|Asset class|.|Instrument type
|---|---|---|
|Debt (long term) > 1 year |Bonds	|Loans|
|Debt (short term) ≤ 1 year |Bills, e.g. T-bills Commercial paper| Deposits Certificates of deposit|
|Equity	|Stock|	N/A|
|Foreign exchange	|N/A	|Spot foreign exchange|


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|
|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|
||
|`Instrument_Type`|`id`|BIGINT(12)|PK, NN|
|`Instrument_Type`|`Name`|VARCHAR(45)|NULL|
||
