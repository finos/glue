
---
id: Restriction_Set_Hierachy

title: Restriction_Set_Hierachy
---

## Data Dictionary - Entity Table: Restriction_Set_Hierachy

Restriction sets are hierarchical structures which provide flexibility in creating composite rule sets composed from further subgroups of restrictions. 
They are used to define strategic and tactical investment strategies. E.g., restricting the share of issuer and instrument in the strategy: share of the instrument can be acceptable in the portfolio, however the share of the issuer can be in violation of the limits. 
Restrictions are used for portfolio construction and optimization to ensure that portfolio holdings comply with the rules defined in the restrictions. Later they are also used in multiple portfolio diagnostics checks which help evaluate Currency Overlay, Portfolio Risk Class, Issuer Concentration, Instrument Concentration, Risk Return, etc. 

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Top of hierarchy (parent)|
|`Child`|BIGINT(12)|NULL|2|Under parent hierarchy (child)|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`RestrictionSetParent`|(`Parent`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`RestrictionSetChild`|(`Child`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`Restriction_Set_Hierachy`|(`Parent` ASC)| VISIBLE|.|
|`Child_idx`|`Restriction_Set_Hierachy`|(`Child` ASC)| VISIBLE|.|
||
 
