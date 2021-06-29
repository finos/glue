---
id: Restriction_Set

title: Restriction_Set
---

## Data Dictionary - Entity Table: Restriction_Set

This table defines a group (set) of restrictions associated with specific investment strategy. 
The set contains multiple restrictions (defined via the Restriction, the Restriction_Type and the Restriction_Definition tables). 
There could be organization-wide restrictions and client-specific restrictions. Restrictions are used for portfolio construction and optimization to ensure that portfolio holdings comply with the rules defined in the restrictions. Later they are also used in multiple portfolio diagnostics checks which help evaluate Currency Overlay, Portfolio Risk Class, Issuer Concentration, Instrument Concentration, Risk Return, etc. 				

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|Portfolio Risk Class 20 Percent; Instrument Concentration 10 Percent;Risk Return Health Check;Issuer Concentration 20 Percent;
Risk SAA EUR Conservative|Name of the restriction set|
|`Owner`|BIGINT(12)|NULL|1|Related to Business partner|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Owner`|(`Owner`)|`Business_Partner` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Owner_idx`|`Restriction_Set`|(`Owner` ASC)| VISIBLE|.|
||
