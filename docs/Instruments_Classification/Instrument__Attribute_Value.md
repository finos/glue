---
id: Instrument__Attribute_Value

title: Instrument__Attribute_Value
---

## Data Dictionary - Entity Table: Instrument__Attribute_Value

**Instrument identifiers from stock exchanges or market info providers.
 
 This table contains the Value of these attributes. They are important when advisor decides to execute a transaction.**	


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Value`|VARCHAR(45)|NULL|e.g: US2058871029, TRE.MC, 6178, OMFSPF|The Attribute Value|
|`Instrument_Attribut`|BIGINT(12)|NULL|1|.|
|`Instrument`|BIGINT(12)|NULL|1|.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`ValueInstrument_Attribute`|(`Instrument_Attribut`)|`Instrument__Attribute_Definition` (`id`)| NO ACTION|NO ACTION|
|`ValueInstrument`|(`Instrument`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Instrument_Attribute_idx`|`Instrument__Attribute_Value`| (`Instrument_Attribut` ASC)| VISIBLE|.|
|`Instrument_idx`|`Instrument__Attribute_Value`| (`Instrument` ASC)| VISIBLE|.|
