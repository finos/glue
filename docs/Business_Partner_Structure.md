---
id: Business_Partner_Structure
title: Business_Partner_Structure
---

## Data Dictionary - Entity Table: Business_Partner_Structure

The Business Partner Structure

To create a hierarchy tree within a Business Partner ID. (Parent, Child, Level and Relationship Type)

To maintain relationships between different business partners. 

For example, parent-subsidiary relationships between companies can be portrayed using the business partner relationships function.

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
|| 
|`Business_Partner_Structure`|`id`| BIGINT(12) |PK, NN|.|
|`Business_Partner_Structure`|`Parent`| BIGINT(12)| NULL|.|
|`Business_Partner_Structure`|`Child`| BIGINT(12)| NULL|.|
|`Business_Partner_Structure`|`Level`| BIGINT(12)| NULL|.|
|`Business_Partner_Structure`|`Relationship_Type`| BIGINT(12) |NULL|.|	  
|For Table: `Business_Partner_Structure`|	  
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
| `ParentBP`| (`Parent`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
| `ChildBP`| (`Child`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
| `Relationship_Type`| (`Relationship_Type`)| `BP-Relationship_Type` (`id`)| NO ACTION| NO ACTION|
|For Table: `Business_Partner_Structure|	  
| CREATE INDEX|ON|ASC|VISABLE|.|
| `Parent_idx`| `Business_Partner_Structure`| (`Parent` ASC)| VISIBLE;|.|
|`Child_idx` |`Business_Partner_Structure`| (`Child` ASC)| VISIBLE;|.|
|`Relationship_Type_idx` |`Business_Partner_Structure`| (`Relationship_Type` ASC) VISIBLE;|.|

