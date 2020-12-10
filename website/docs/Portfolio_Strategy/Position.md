---
id: Position 
title: Position 
---

## Data Dictionary - Entity Table: Position 

Summary of all client positions (market values and quantities) are stored in this table. 
Position table is frequentry shown at the bottom of different views (client portfolios view, aset allocation,
 region, currency views) so that user can easily modify it to rebalance the portfolio of the client.

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)'Contains the portfolio position objects'|
|`financial_account_id`|BIGINT(12)|NOT NULL|1|ID of financial account-Mandatory|
|`instrument_id`|BIGINT(12)|NOT NULL|1|'ID of the instrument' Mandatory|
|`original_id`|BIGINT(12)|NULL|1|'orginal ID is used by source and simulated position in order to have the link to the ID of real position'|
|`quantity`|DECIMAL(25,9)|NOT NULL|100|Count of units purchased. Measured in items.'Quantity / units of the position'|
|`market_value`|DECIMAL(25,9)|NOT NULL|2000|'market_value of the position. Measured in currency of portfolio'|
|`accruals`|DECIMAL(25,9)|NOT NULL|20|'Accrued interest or dividend of the position'|
|`cost_price`|DECIMAL(25,9)|NOT NULL|54|Average price of all the purchases. Measured in currency of portfolio|
|`currency_id`|BIGINT(12)|NOT NULL|1|'ID of the position reference currency'|
|`create_datetime`|DATETIME(3)|NOT NULL|1/1/2020  12:30:00 PM|'Date when the position was created'|
|`market_value_percentage_modifiable`|TINYINT|NOT NULL|1|'Determines if user (client advisor) can modify position share (in percentages) and trigger a new proposal/trade or not. They can modify only the quantity or total value. Flag whether the market value percentage is modifiable'|
|||CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`currency_id`|(`currency_id`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`fk_position_financial_account1`|(`financial_account_id`)|`Financial_Account` (`id`)| NO ACTION|NO ACTION|
|`Instrument`|(`instrument_id`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`currency_id_idx`|`Position`|(`currency_id` ASC) | VISIBLE||
|`fk_position_financial_account1_idx`|`Position `|(`financial_account_id` ASC) | VISIBLE||
|`Instrument_idx`|`Position `|(`instrument_id` ASC)| VISIBLE||  
||
 
