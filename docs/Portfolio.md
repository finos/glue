---
id: Portfolio

title: Portfolio
---

## Data Dictionary - Entity Table: Portfolio

See Comments in Table below:

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Comment|
||
|`Portfolio`|`id`|BIGINT(12)|PK, NN|'Contains the portfolio objects'|
|`Portfolio`|`business_partner_id`|BIGINT(12)|NOT NULL|'ID of business partner'|
|`Portfolio`|`reference_currency_id`|BIGINT(12)|NOT NULL|'ID of portfolio reference currency'|
|`Portfolio`|`type_id`|BIGINT(12)|NOT NULL|.|
|`Portfolio`|`Investment_Strategy`|BIGINT(12)|NULL|.|
|`Portfolio`|`virtual`|TINYINT|NOT NULL|.|
|`Portfolio`|`Name`|VARCHAR(45)|NULL|.|
|`Portfolio`|`is_group`|TINYINT|NULL|.|
|`Portfolio`|`Book`|BIGINT(12)|NULL|.|
|For Table: `Portfolio`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`reference_currency_id`|(`reference_currency_id`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`type_id`|(`type_id`)|`Portfolio_Type` (`id`)| NO ACTION|NO ACTION|
|`Strategy`|(`Investment_Strategy`)|`Investment_Strategy` (`id`)| NO ACTION|NO ACTION|
|`Book`|(`Book`)|`Book` (`id`)| NO ACTION|NO ACTION|
|For Table: `Portfolio`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`reference_currency_id_idx`|`Portfolio`|(`reference_currency_id` ASC) | VISIBLE|.|
|`type_id_idx`|`Portfolio`|(`type_id` ASC) | VISIBLE|.|
|`Strategy_idx`|`Portfolio`|(`Investment_Strategy` ASC) | VISIBLE|.| 
|`Book_idx`|`Portfolio`|(`Book` ASC)| VISIBLE|.|  

