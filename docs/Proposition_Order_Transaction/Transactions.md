---
id: Transactions

title: Transactions
---

## Data Dictionary - Entity Table: Transactions


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)'Contains the transactions'|
|`position_id` |BIGINT(12)|NOT NULL|1|'ID of the position'|
|`verification_date`|DATETIME|NULL|10/10/2020  12:30:00 PM|'Verification Date (Completion date of the entire trade verification process incl. confirmation, affirmation and allocation)\n'|
|`Transaction_Date`|DATETIME|NOT NULL |10/10/2020  12:30:00 PM|'Trade Date (Execution date of the trade, relevant for tax rules and holding periods)\n'|
|`performance_date`|DATETIME|NULL|10/10/2020  12:30:00 PM|'Performance Date (date from which performance should be calculated - custodians are mostly settlement oriented while most performance reporting systems are trade date oriented)\n'|
|`settlement_date`|DATETIME|NULL|10/10/2020  12:30:00 PM|'Settlement Date (relevant for brokers re funding of trades and to determine legal ownership)\n'|
|`transaction_type_id`|BIGINT(12)|NOT NULL |1|'ID of the transaction type\n'|
|`transaction_meta_type_id`|BIGINT(12)|NULL|1|'ID of the meta type\n'|
|`quantity`|DECIMAL(25,9)|NOT NULL |2000|'quantity traded\n'|
|`cost_price`|DECIMAL(25,9)|NOT NULL |12|'Average execution price for transaction'|
|`cost_price_currency_id`|BIGINT(12)|NOT NULL |1|'ID of the cost price currency'|
|`transaction_value`|DECIMAL(25,9)|NULL |24000|'Transaction value in trade currency\n'|
|`transaction_value_currency_id`|BIGINT(12)|NULL |1|'Currency ID of Transaction value \n'|
|`internal_book_text`|VARCHAR(45)|NULL |A123|'Internal booking text\n'|
|`external_book_text`|VARCHAR(45)|NULL |B123|'External booking text\n'|
|`Fill` |BIGINT(12)|NULL |1|Filling order id|
|`ExternalID`|VARCHAR(45)|NULL |1|External transaction id|
|`InternalID`|VARCHAR(45)|NULL |1|Internal transaction id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`position_id`|(`position_id`)|`Position`(`id`)| NO ACTION|NO ACTION|
|`cost_price_currency_id`|(`cost_price_currency_id`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`transaction_type_id`|(`transaction_type_id`)|`Transaction_Type`(`id`)| NO ACTION|NO ACTION|
|`transaction_meta_type_id`|(`transaction_meta_type_id`)|`Transaction_Meta_Type` (`id`)| NO ACTION|NO ACTION|
|`transaction_value_currency_id`|(`transaction_value_currency_id`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`Fill`|(`Fill`)|`Fill` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`position_id_idx`|`Transactions`|(`position_id` ASC)| VISIBLE|.|
|`cost_price_currency_id_idx`|`Transactions`|(`cost_price_currency_id` ASC)| VISIBLE|.|
|`transaction_type_id_idx`|`Transactions `|(`transaction_type_id` ASC)| VISIBLE|.|  
|`transaction_meta_type_id_idx`|`Transactions `|(`transaction_meta_type_id` ASC)| VISIBLE|.|
|`transaction_value_currency_id_idx`|`Transactions `|(`transaction_value_currency_id` ASC)| VISIBLE|.|
|`Fill_idx`|`Transactions `|(`Fill` ASC)| VISIBLE|.|  
||
