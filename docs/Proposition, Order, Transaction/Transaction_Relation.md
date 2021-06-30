---
id: Transaction_Relation

title: Transaction_Relation
---

## Data Dictionary - Entity Table: Transaction_Relation

There could be relations between transactions which are captured in this table. 
For example, a single corporate action could result in more than one position change or a portfolio manager may decide to rebalance the portfolio to the approved investment strategy and may want to buy stock X and sell stock Y. 
These two transactions could be marked as related. 			

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Source` |BIGINT(12)|NULL|1|Source transaction id|
|`Associated`|BIGINT(12)|NULL|2|Associated transaction id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Source`|(`Source`)|`Transactions` (`id`)| NO ACTION|NO ACTION|
|`Associated`|(`Associated`)|`Transactions` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Source_idx` |`Transaction_Relation`|(`Source` ASC) | VISIBLE|.|
|`Associated_idx` |`Transaction_Relation`|(`Associated` ASC)| VISIBLE|.| 
||
