---
id: Investment_Proposition_Position_Change

title: Investment_Proposition_Position_Change
---

## Data Dictionary - Entity Table: Investment_Proposition_Position_Change
Enter information for the investment proposition, position change.

| Create Table if NOT EXISTS|Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Investment_Proposition_Position_Change`|`id`|BIGINT(12)|PK, NN|.|
|`Investment_Proposition_Position_Change`|`position_id`|BIGINT(12)|NULL|.|
|`Investment_Proposition_Position_Change`|`instrument_id`|BIGINT(12)|NULL|.|
|`Investment_Proposition_Position_Change`|`market_value`|DECIMAL(25,9)|NULL|.|
|`Investment_Proposition_Position_Change`|`investment_proposition_id`|BIGINT(12)|NOT NULL|.|
|`Investment_Proposition_Position_Change`|`Quantity`|DECIMAL|NULL|.|
|`Investment_Proposition_Position_Change`|`Order`|BIGINT(12)|NULL|.|
|For Table: `Investment_Proposition_Position_Change`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`fk_investment_proposition_position_change_investment_proposit1`| (`investment_proposition_id`)|`Investment_Proposition` (`id`)| NO ACTION|NO ACTION|
|`Position`|(`position_id`)|`Position` (`id`)| NO ACTION|NO ACTION|
|`PropositionOrder`|(`Order`)|`Order` (`id`)| NO ACTION|NO ACTION|
|`PropositionInstrument`|(`instrument_id`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
|For Table: `Investment_Proposition_Position_Change`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`fk_investment_proposition_position_change_investment_propos_idx`|`Investment_Proposition_Position_Change`| (`investment_proposition_id` ASC)| VISIBLE|.|
|`Position_idx`|`Investment_Proposition_Position_Change`| (`position_id` ASC) | VISIBLE|.|
|`Order_idx`|`Investment_Proposition_Position_Change`| (`Order` ASC) | VISIBLE|.|
|`Instrument_idx`|`Investment_Proposition_Position_Change`| (`instrument_id` ASC)| VISIBLE|.|
