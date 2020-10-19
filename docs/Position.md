---
id: Position 

title: Position 
---

## Data Dictionary - Entity Table: Position 

See Comments in Table below:

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Comment|
||
|`Position `|`id`|BIGINT(12)|PK, NN|'Contains the portfolio position objects'|
|`Position `|`financial_account_id`|BIGINT(12)|NOT NULL|.|
|`Position `|`instrument_id`|BIGINT(12)|NOT NULL|'ID of the instrument'|
|`Position `|`original_id`|BIGINT(12)|NULL|'orginal ID is used by source and simulated position in order to have the link to the ID of real position'|
|`Position `|`quantity`|DECIMAL(25,9)|NOT NULL|'Quantity / units of the position'|
|`Position `|`market_value`|DECIMAL(25,9)|NOT NULL|'market_value of the position in currency'|
|`Position `|`accruals`|DECIMAL(25,9)|NOT NULL|'Accruals of the position'|
|`Position `|`cost_price`|DECIMAL(25,9)|NOT NULL|.|
|`Position `|`currency_id`|BIGINT(12)|NOT NULL|'ID of the position reference currency'|
|`Position `|`create_datetime`|DATETIME(3)|NOT NULL|'Date when the position was created'|
|`Position `|`market_value_percentage_modifiable`|TINYINT|NOT NULL|'Flag whether the market value percentage is modifiable'|
|For Table: `Position `|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`currency_id`|(`currency_id`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`fk_position_financial_account1`|(`financial_account_id`)|`Financial_Account` (`id`)| NO ACTION|NO ACTION|
|`Instrument`|(`instrument_id`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
|For Table: `Position `|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`currency_id_idx`|`Position`|(`currency_id` ASC) | VISIBLE|.|
|`fk_position_financial_account1_idx`|`Position `|(`financial_account_id` ASC) | VISIBLE|.|
|`Instrument_idx`|`Position `|(`instrument_id` ASC)| VISIBLE|.|  
