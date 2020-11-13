---
id: Instrument_Type

title: Instrument_Type
---

## Data Dictionary - Entity Table: `Instrument_Type`

**List of instrument types used for view of client portfolio(s) by different asset classes**

Financial instruments may be divided into two types: cash instruments and derivative instruments.

example:

|Asset class|.|Instrument type
|---|---|---|
|Debt (long term) > 1 year |Bonds	|Loans|
|Debt (short term) ≤ 1 year |Bills, e.g. T-bills Commercial paper| Deposits Certificates of deposit|
|Equity	|Stock|	N/A|
|Foreign exchange	|N/A	|Spot foreign exchange|


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Municipal bonds, cash account, real estate|Name of the Instrument_Type|
||
