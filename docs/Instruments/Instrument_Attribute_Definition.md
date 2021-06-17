---
id: Instrument_Attribute_Definition

title: Instrument_Attribute_Definition
---

## Data Dictionary - Entity Table: Instrument_Attribute_Definition

Instrument Attributes represent identification codes (ISIN, SEDOL, CUSIP, etc.) and product specific metrics (yield, maturity, etc.) This information is used for drive all processes such as trading, evaluating the risk for the portfolio and other operational procedures. Instrument_Attribute_Definition table serves to classify the different attribute types and link them to specific asset classes. 
This table would store all attributes for an instrument exept for the name (which is in the Instrument table).


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Attribute_Name`|VARCHAR(45)|NULL|FIGI, ISIN, Ticker, Credit Rating, Duration|Name of the Attribute. It can represent identification codes (ISIN, SEDOL), corporate ratings (Fitch, S&P), product specific metrics (market cap,maturity, duration) , etc.|
|`Attribute_Type`|VARCHAR(45)|NULL|Attribute type allows flexible grouping the attributes based on the purpose it serves within the organization, i.e Market (describing the market on which the instrument is traded), Trading&Settlement (facilitating the trading process), Corporate&Legal (describing the company or legal entity), etc.|
|`Instrument_Type`|BIGINT(12)|NULL|1|Instrument Type id,  see Insturment_Type Table.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type`|(`Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Instrument_Type_idx` |`Instrument__Attribute_Definition` | (`Instrument_Type` ASC) | VISIBLE|.|
||

