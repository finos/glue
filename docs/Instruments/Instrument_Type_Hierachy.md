---
id: Instrument_Type_Hierachy

title: Instrument_Type_Hierachy
---

## Data Dictionary - Entity Table: Instrument_Type_Hierachy

This table provides the hierarchy of instrument types ,e.g. Equites -> Common stock. 
This hierarchy can help for operational processes, by providing the link between different attributes and different instrument types.
The attributes applicable to one parent node should be applicable to all child nodes.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Examples|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent_Instrument_Type`|BIGINT(12)|NULL|1|Id for the top node of hierarchy (parent) of Instrument types. Recommended is to store only the direct relationships between parent node and child node.|
|`Child_Instrument_Type`|BIGINT(12)|NULL|3|Id for the underlying node in the hierarchy (child) of Instrument types. More than one child node can be associated with parent node.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Instrument_Type_Parent`|(`Parent_Instrument_Type`)|`InstrumentType` (`id`)| NO ACTION|NO ACTION|
|`Instrument_Type_Child`|(`Child_Instrument_Type`)|`Instrument_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Child_idx`|`Instrument_Type_Hierachy`| (`Child_Instrument_Type` ASC)| VISIBLE|.|
|`Parent_idx` |`Instrument_Type_Hierachy` |(`Parent_Instrument_Type` ASC)| VISIBLE|.|
||

