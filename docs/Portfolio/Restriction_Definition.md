---
id: Restriction_Definition

title: Restriction_Definition
---

## Data Dictionary - Entity Table: Restriction_Definition

This table contains the restrictions metrics which are associated with specific investment strategy, e.g. weight of the instrument should not exceed specified share. 
If the restriction is violated by a certain position in the portfolio or by a proposed transaction, then respective warning may be displayed to the user.  		

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Restriction_Type`|BIGINT(12)|NULL|1|Id from Restriction Type table. This column links to the Asset Classification/Instrument Attribute to which the restriction is applied.|
|`Operator`|ENUM("=", ">", "<", ">=", "<=", "<>") |NULL|<=|Operator of the restriction|
|`Value`|VARCHAR(45)|NULL|0.02|Restrictions threshold, e.g. <= 2% of portfolio|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionType`|(`Restriction_Type`)|`Restriction_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`id_idx`|`Restriction_Definition`|(`Restriction_Type` ASC)| VISIBLE|.|
||

