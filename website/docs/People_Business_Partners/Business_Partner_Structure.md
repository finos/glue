---
id: Business_Partner_Structure
title: Business Partner Structure
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Business_Partner_Structure

Contains the business partner hierarchies of the organisation. Example for internal BP: Booking center -> Department -> Team -> Client. 
This allows aggregation of the AUM or NNM on different levels. 


|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
|| 
|`id`| BIGINT(12) |PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`| BIGINT(12)| NULL|6|Top of hierarchy (parent) of BP|
|`Child`| BIGINT(12)| NULL|15|Under parent hierarchy (child) of BP|
|`Level`| BIGINT(12)| NULL|1|Level of Structure|
|`Relationship_Type`| BIGINT(12) |NULL|1|Type of the relationship|  
||	  
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`ParentBP`| (`Parent`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`ChildBP`| (`Child`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`Relationship_Type`| (`Relationship_Type`)| `BP-Relationship_Type` (`id`)| NO ACTION| NO ACTION|
||	  
| CREATE INDEX|ON|ASC|VISIBLE|.|
|`Parent_idx`| `Business_Partner_Structure`| (`Parent` ASC)| VISIBLE|.|
|`Child_idx` |`Business_Partner_Structure`| (`Child` ASC)| VISIBLE|.|
|`Relationship_Type_idx` |`Business_Partner_Structure`| (`Relationship_Type` ASC)|VISIBLE|.|
||



	  

