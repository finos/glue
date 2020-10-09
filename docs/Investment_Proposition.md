---
id: Investment_Proposition

title: Investment_Proposition
---

## Data Dictionary - Entity Table: Investment_Proposition


An investment proposition can be explained as the underlying investments,
funds or portfolio of funds that sit behind any investment or pension product following completion of a 'Risk Profiling' process.”

Enter information for the investment proposition.

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Investment_Proposition`|`id`|BIGINT(12)|PK, NN|.|
|`Investment_Proposition`|`name`|VARCHAR(32)|NULL|.|
|`Investment_Proposition`|`description`|VARCHAR(1024)|NULL|.|
|`Investment_Proposition`|`presentation_currency_id`|BIGINT(12)|NULL|.|
|`Investment_Proposition`|`real_portfolio_id`|BIGINT(12)|NULL|.|
|`Investment_Proposition`|`source_portfolio_id`|BIGINT(12)|NULL|.|
|`Investment_Proposition`|`simulated_portfolio_id`|BIGINT(12)|NULL|.|
|`Investment_Proposition`|`Created_Date`|DATETIME|NULL|.|
|`Investment_Proposition`|`Accepted_Date`|DATETIME|NULL|.|
|For Table: `Investment_Proposition`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`fk_investment_proposition_portfolio1`| (`real_portfolio_id`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`fk_investment_proposition_portfolio2`|(`source_portfolio_id`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`fk_investment_proposition_portfolio3`|(`simulated_portfolio_id`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|For Table: `Investment_Proposition`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`fk_investment_proposition_portfolio1_idx`|`Investment_Proposition`| (`real_portfolio_id` ASC)| VISIBLE|.|
|`fk_investment_proposition_portfolio2_idx`|`Investment_Proposition`| (`source_portfolio_id` ASC)| VISIBLE|.|
|`fk_investment_proposition_portfolio3_idx`|`Investment_Proposition`| (`simulated_portfolio_id` ASC) | VISIBLE|.|
