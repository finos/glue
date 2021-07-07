---
id: Price
title: Price
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Price

This table records the price of an Instrument as of a specific date and time. 
The information can be taken from third party provider or can be internally calculated based on variety of valuation methodologies.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|2|PrimaryKey-ID, Not Null (auto creates)|	
|`Instrument_id`|BIGINT(12)|NULL|1|Instrument ID from the Instrument table for the specific instrument.|
|`Currency_id`|BIGINT(12)|NULL|1|ID of the currency from Currency table. Currency can be based on the market where the instrument is traded or based on the currency in which we have invested in the instrument.|
|`Quote_type_id`|BIGINT(12)|NULL|1|Id from Price_Quote table|
|`Instrument_Price`|DECIMAL(25,9)|NULL|58|Price of the instrument - can be calculated internally or taken directly from market data provider (for example Bloomberg).|
|`Timestamp`|TIMESTAMP(3)|NULL|'12/31/2001'|Date on which the valuation was performed.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_price`|(`Instrument`)|`Instrument`(`id`)| NO ACTION|NO ACTION|
|`Currency_price`|(`Currency`)|`Currency`(`id`)| NO ACTION|NO ACTION|
|`Type_price`|(`Price_quote`)|`Price_Quote`(`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Instrument_id_idx`|`Price`| (`Instrument_id` ASC)| VISIBLE|.|
|`Currency_price_idx`|`Price`| (`Currency_id` ASC)| VISIBLE|.|
|`Type_price_idx`|`Price`| (`Quote_type_id` ASC)| VISIBLE|.|
||
