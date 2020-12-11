---
id: Portfolio
title: Portfolio
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Portfolio
	
Portfolio table that contains key characteristics of every portfolio including its type, investment strategy , etc.

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates) Contains the Unique Portfolio ID|
|`business_partner_id`|BIGINT(12)|NOT NULL|1|Related BP ID (business partner)|
|`reference_currency_id`|BIGINT(12)|NOT NULL|1|Reference currency id: portfolio performance (accounting of gains and losses) is measured in reference currency. If investment currency is different from reference one, then currency risk arises|
|`type_id`|BIGINT(12)|NOT NULL|1|`Type of the portfolio`|
|`Investment_Strategy`|BIGINT(12)|NULL|1|`Portfolio investment strategy`|
|`virtual`|TINYINT|NOT NULL|0|(Mandatory)`Real or virtual portfolio. See table portfolio type for more details`|
|`Name`|VARCHAR(45)|NULL|WAM.1655|Portfolio name|
|`is_group`|TINYINT|NULL|0||
|`Book`|BIGINT(12)|NULL|1|Book to which portfolio belongs|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`reference_currency_id`|(`reference_currency_id`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`type_id`|(`type_id`)|`Portfolio_Type` (`id`)| NO ACTION|NO ACTION|
|`Strategy`|(`Investment_Strategy`)|`Investment_Strategy` (`id`)| NO ACTION|NO ACTION|
|`Book`|(`Book`)|`Book` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`reference_currency_id_idx`|`Portfolio`|(`reference_currency_id` ASC) | VISIBLE||
|`type_id_idx`|`Portfolio`|(`type_id` ASC) | VISIBLE||
|`Strategy_idx`|`Portfolio`|(`Investment_Strategy` ASC) | VISIBLE|| 
|`Book_idx`|`Portfolio`|(`Book` ASC)| VISIBLE||  
||
