---
id: Investment_Proposition_Position_Change

title: Investment_Proposition_Position_Change
---

## Data Dictionary - Entity Table: Investment_Proposition_Position_Change

Investment proposition implies that some change to the existing portoflio should be made, e.g. buy or sell new assets (instruments). 
This table describes these changes in terms of respective instrument market value and quantity

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`position_id`|BIGINT(12)|NULL|1|Related position id|
|`instrument_id`|BIGINT(12)|NULL|1|Id of the Instrument that should be bought or sold|
|`market_value`|DECIMAL(25,9)|NULL|2000|CMarket value of the proposed change to this instrument holding|
|`investment_proposition_id`|BIGINT(12)|NOT NULL|1|Proposition id|
|`Quantity`|DECIMAL|NULL|100|Quantity of the instrument to be bought or sold (e.g., number of shares)|
|`Order`|BIGINT(12)|NULL|1|Order id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`fk_investment_proposition_position_change_investment_proposit1`| (`investment_proposition_id`)|`Investment_Proposition` (`id`)| NO ACTION|NO ACTION|
|`Position`|(`position_id`)|`Position` (`id`)| NO ACTION|NO ACTION|
|`PropositionOrder`|(`Order`)|`Order` (`id`)| NO ACTION|NO ACTION|
|`PropositionInstrument`|(`instrument_id`)|`Instrument` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`fk_investment_proposition_position_change_investment_propos_idx`|`Investment_Proposition_Position_Change`| (`investment_proposition_id` ASC)| VISIBLE|.|
|`Position_idx`|`Investment_Proposition_Position_Change`| (`position_id` ASC) | VISIBLE|.|
|`Order_idx`|`Investment_Proposition_Position_Change`| (`Order` ASC) | VISIBLE|.|
|`Instrument_idx`|`Investment_Proposition_Position_Change`| (`instrument_id` ASC)| VISIBLE|.|
