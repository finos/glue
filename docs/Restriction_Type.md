---
id: Restriction_Type

title: Restriction_Type
---

## Data Dictionary - Entity Table: Restriction_Type


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Restriction_Type `|`id`|BIGINT(12)|PK, NN|.|
|`Restriction_Type `|`Restriction`|BIGINT(12)|NULL|.|
|`Restriction_Type `|`Instrument_Attribute`|BIGINT(12)|NULL|.|
|`Restriction_Type `|`Node`|BIGINT(12)|NULL|.|
|`Restriction_Type `|`Summable`|TINYINT|NULL|.|
|`Restriction_Type `|`Type`|ENUM("Node", "Attribute")|NULL|.|
|`Restriction_Type `|`Restriction_Typecol`|VARCHAR(45)|NULL|.|
|`Restriction_Type `|`Instrument_Field`|VARCHAR(45)|NULL|.|
|`Restriction_Type `|`Link_Type`|VARCHAR(3)|NULL|.|
|For Table: `Restriction_Type `|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`id`|(`Restriction`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
|`Instrument_Attribute`|(`Instrument_Attribute`)|`Instrument__Attribute_Definition` (`id`)| NO ACTION|NO ACTION|
|`Node`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
|For Table: `Restriction_Type `|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`id_idx`|`Restriction_Type`|(`Restriction` ASC) | VISIBLE|.|
|`Instrument_Attribute_idx`|`Restriction_Type`|(`Instrument_Attribute` ASC) | VISIBLE|.|
|`Node_idx`|`Restriction_Type `|(`Node` ASC)| VISIBLE|.|  

    
