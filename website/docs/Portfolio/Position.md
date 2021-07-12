---
id: Position 
title: Position
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Position 

Table represents all client positions (market values and quantities) for every portfolio. Each position includes a cost price and a timestamp to allow complex tax optimization in relevant jurisdictions (Tax lot accounting).

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`financial_account_id`|BIGINT(12)|NOT NULL|1|ID of financial account-Mandatory|
|`instrument_id`|BIGINT(12)|NOT NULL|1|ID of the instrument Mandatory|
|`original_id`|BIGINT(12)|NULL|1|Orginal ID is used to support simulated positions by storing the link to the ID of the real position.|
|`quantity`|DECIMAL(25,9)|NOT NULL|100|Count of units purchased. Measured in items.|
|`market_value`|DECIMAL(25,9)|NOT NULL|2000|Market_value of the position. Measured in currency of portfolio|
|`accruals`|DECIMAL(25,9)|NOT NULL|20|Accrued absolute amount of the interest or dividend of the position. Best to be maintained as cumulative value.|
|`cost_price`|DECIMAL(25,9)|NOT NULL|54|Purchase Price of the position. Measured in currency of the instrument|
|`currency_id`|BIGINT(12)|NOT NULL|1|ID of the currency of the instrument for this position.|
|`purchase_datetime`|DATETIME(3)|NOT NULL|1/1/2020  12:30:00 PM|Date when the instrument was purchased|
|`close_datetime`|DATETIME(3)|NOT NULL|12/31/9999  12:30:00 PM|Date when the Position is closed. If not closed - default value is '12/31/9999'|
|`market_value_datetime`|DATETIME(3)|NOT NULL|1/1/2020  12:30:00 PM|Date when the market value of the position has been updated from the Price table.|
|`market_value_ percentage_modifiable`|TINYINT|NOT NULL|1|Flag whether the market value percentage is modifiable. Determines whether user (client advisor) can modify position share (in percentages) and trigger a new proposal/trade or not.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`currency_id`|(`currency_id`)|`Currency` (`id`)|NO ACTION|NO ACTION|
|`financial_account`|(`financial_account_id`)|`Financial_Account` (`id`)|NO ACTION|NO ACTION|
|`Instrument`|(`instrument_id`)|`Instrument` (`id`)|NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`currency_id_idx`|`Position`|(`currency_id` ASC) | VISIBLE|.|
|`financial_account_idx`|`Position `|(`financial_account_id` ASC) | VISIBLE|.|
|`Instrument_idx`|`Position `|(`instrument_id` ASC)| VISIBLE|.|  
||
 
