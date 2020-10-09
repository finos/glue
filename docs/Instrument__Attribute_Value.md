---
id: Instrument__Attribute_Value

title: Instrument__Attribute_Value
---

## Data Dictionary - Entity Table: Instrument__Attribute_Value

**To provide additional information about the Financial Instrument. (Value, Instrument Attribute)**

Calculating the principal value of a trade

**Equity prices** quoted in whole currency units or in “penny units” of the currency.

**Bond prices** shown as a percentages of the principal amount being traded.

When dealing with futures and options; take into account the quantity of the underlying instrument when calculating the value of a trade in these instruments.

A generic formula to calculate the principal value of any security, future or option, is :

PRINCIPAL VALUE = NOMINAL AMOUNT x PRICE x MULTIPLIER/DIVISOR

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
|`Instrument__Attribute_Value`|`id`|BIGINT(12)|PK, NN|.|
|`Instrument__Attribute_Value`|`Value`|VARCHAR(45)|NULL|.|
|`Instrument__Attribute_Value`|`Instrument_Attribut`|BIGINT(12)|NULL|.|
|`Instrument__Attribute_Value`|`Instrument`|BIGINT(12)|NULL|.|
|For Table: `Instrument__Attribute_Value`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ValueInstrument_Attribute`|(`Instrument_Attribut`)|`Instrument__Attribute_Definition` (`id`)| NO ACTION|NO ACTION|
|`ValueInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
|For Table: `Instrument__Attribute_Value`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Instrument_Attribute_idx`|`Instrument__Attribute_Value`| (`Instrument_Attribut` ASC)| VISIBLE|.|
