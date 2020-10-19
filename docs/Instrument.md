---
id: Instrument

title: Instrument
---

## Data Dictionary - Entity Table: `Instrument` 

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

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Instrument`|`id`|BIGINT(12)|PK, NN|.|
|`Instrument`|`Name`|VARCHAR(45)|NULL|.|
|`Instrument`|`Type`|BIGINT(12)|NULL|.|
|For Table: `Instrument`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`InstrumentType`|(`Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
|For Table: `Instrument`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Type_idx`|`Instrument`| (`Type` ASC)| VISIBLE|.|
