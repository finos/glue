---
id: Restriction_Type

title: Restriction_Type
---

## Data Dictionary - Entity Table: Restriction_Type

This table defines the types of restrictions that can be enforced as well as to which Asset Classification Node/Instrument Attribute the Restriction is applicable.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Restriction`|BIGINT(12)|NULL|23|Restriction id|
|`Instrument_Attribute_Definition_ID`|BIGINT(12)|NULL|1|Instrument Attribute Definition (id)|
|`Node`|BIGINT(12)|NULL|1|Asset classification node id|
|`Summable`|TINYINT|NULL|0|If restriction is summable, it can be aggregated to parent level and rules applied to it. E.g: Energy can be limited to <=10% and two instruments Exxon <=4% and BP <=3%. If Exxon share is 5% - it is violated, BP is 2% and is not violated. When Summable, Exxon + BP is not violated| 
|`Type`|ENUM("Node", "Attribute")|NULL|Node; Attribute|Asset classification node or attribute|
|`Instrument_id`|VARCHAR(45)|NULL|Amazon|General instrument name|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`id`|(`Restriction`)|`Restriction` (`id`)| NO ACTION|NO ACTION|
|`Instrument_Attribute`|(`Instrument_Attribute`)|`Instrument__Attribute_Definition` (`id`)| NO ACTION|NO ACTION|
|`Node`|(`Node`)|`Asset_Classification_Node` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`id_idx`|`Restriction_Type`|(`Restriction` ASC) | VISIBLE|.|
|`Instrument_Attribute_idx`|`Restriction_Type`|(`Instrument_Attribute` ASC) | VISIBLE|.|
|`Node_idx`|`Restriction_Type `|(`Node` ASC)| VISIBLE|.|  
||
     
