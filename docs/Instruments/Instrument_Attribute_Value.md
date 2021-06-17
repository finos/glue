---
id: Instrument_Attribute_Value

title: Instrument_Attribute_Value
---

## Data Dictionary - Entity Table: Instrument_Attribute_Value

Instrument Attributes represent identification codes (ISIN, SEDOL, CUSIP, etc.) and product specific metrics (yield, maturity, etc.). This information is used for drive all processes such as trading, evaluating the risk for the portfolio and other operational procedures. 
This table serves to hold the values of the attributes for each individual instrument. 		


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Value`|VARCHAR(45)|NULL|e.g: US2058871029, TRE.MC, 6178, OMFSPF, AA|Value of the attribute|
|`Instrument_Attribut`|BIGINT(12)|NULL|1|Id from Instrument_Attribute_Definition for the specific attribute.|
|`Instrument`|BIGINT(12)|NULL|1|Instrument ID from the Instrument table for the specific instrument. NB! There are no constraints to enforce referential integrity across Instrument and Instrument_Attribute tables. This allows duplicate Instruments to be created. We recommend the user to establish operational process or naming conventions to minimize issues resulting from duplicates.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ValueInstrument_Attribute`|(`Instrument_Attribut`)|`Instrument__Attribute_Definition` (`id`)| NO ACTION|NO ACTION|
|`ValueInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Instrument_Attribute_idx`|`Instrument__Attribute_Value`| (`Instrument_Attribut` ASC)| VISIBLE|.|
|`Instrument_idx`|`Instrument__Attribute_Value`| (`Instrument` ASC)| VISIBLE|.|
||

