---
id: Investment_Proposition

title: Investment_Proposition
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Investment_Proposition

Investment proposition (or proposal in short) is created when client advisor wants to modify existing client's portfolio, 
suggest new opportunities, simulate trades and investigate the impact upon client holdings. 
The engine should copy the existing portfolio (called source portfolio) and create a simulated portfolio.
Changes are then applied on the simulated portfolio and compared with the source portfolio.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`name`|VARCHAR(32)|NULL|epam|Name of the proposal|
|`description`|VARCHAR(1024)|NULL|increase exposure to tech stocks|Short proposal description|
|`presentation_currency_id`|BIGINT(12)|NULL|1|This is the currency in which proposal is presented to the client. See Currency Table|
|`real_portfolio_id`|BIGINT(12)|NOT NULL|1|Actual portfolio id|
|`source_portfolio_id`|BIGINT(12)|NOT NULL|2|Parent portfolio id that is copied and used as a starting point for new simulated portfolio|
|`simulated_portfolio_id`|BIGINT(12)|NOT NULL|3|Simulated portfolio id that contains this investment proposition|
|`Created_Date`|DATETIME|NULL|1/1/2020  12:30:00 PM|Date when proposal was created|
|`Accepted_Date`|DATETIME|NULL|10/1/2020  12:30:00 PM|Date when proposal was accepted / approved by the client|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`fk_investment_proposition_portfolio1`| (`real_portfolio_id`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`fk_investment_proposition_portfolio2`|(`source_portfolio_id`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`fk_investment_proposition_portfolio3`|(`simulated_portfolio_id`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|For Table: `Investment_Proposition`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`fk_investment_proposition_portfolio1_idx`|`Investment_Proposition`| (`real_portfolio_id` ASC)| VISIBLE|.|
|`fk_investment_proposition_portfolio2_idx`|`Investment_Proposition`| (`source_portfolio_id` ASC)| VISIBLE|.|
|`fk_investment_proposition_portfolio3_idx`|`Investment_Proposition`| (`simulated_portfolio_id` ASC) | VISIBLE|.|
||
