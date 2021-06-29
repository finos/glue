
---
id: Restriction

title: Restriction
---

## Data Dictionary - Entity Table: Restriction

This table contains predetermined restriction types and circumstances by which these restrictions should be checked. 
Limits for different investment strategies can be set based on asset classifications (industry, region, asset class) and specific instruments types (Amazon shares). 
The group of tables linked to Restrictions can be applied to check if the portfolio fits the predetermined investment strategy or if a proposed transaction will unbalance the portfolio. 		

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|Amazon; Tobacco|Name of the restriction|
|`Owner`|BIGINT(12)|NULL|1|Related to Business_Partner table. Owner column can determine which user is able to review and change this settings.|
|`Pre_Deal_Check`|TINYINT|NULL|1|Determines to check this restriction or not, before conducting the deal (transaction) to assure it will not break restriction threshold|
|`Batch_Check`|TINYINT|NULL|1|Determines whether to check this restriction regularly on a batch basis|
|`Overridable`|TINYINT|NULL|0|Determines whether it could be overridden|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionOwner`|(`Owner`)|`Business_Partner` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Owner_idx`|`Restriction`|(`Owner` ASC)| VISIBLE|.|
||



