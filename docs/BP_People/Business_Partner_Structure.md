---
id: Business_Partner_Structure
title: Business_Partner_Structure
---

## Data Dictionary - Entity Table: Business_Partner_Structure

Hierarchical structure of business partners. Moving top-down, clients are aggregated into different groups:

 first by country, e.g: Switzerland can have multiple booking centers as its cities, next is the split by 
 
 mandate type (CH Wealth Advisory, CH Discretionary, CH ExecutionOnly, CH Custody), then clients of the teams, 
 
 then individual clients. This structure can support different use cases e.g: "I want to find my largest/ smallest clients" 
 
 clients or groups of clients at some level shown in the table with the names, the user can sort by AUM. 
 
 The next drill-down level after business partner are the portfolios of clients.

 These can have hierarchical structure that is described in the table Portfolio_Structure.
 
Please see page: Domain Group for Business Partner/ People, for information on Hierarchial Structure. 

|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
|| 
|`id`| BIGINT(12) |PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`| BIGINT(12)| NULL|6|Top of hierarchy (parent) of BP|
|`Child`| BIGINT(12)| NULL|15|Under parent hierarchy (child) of BP|
|`Level`| BIGINT(12)| NULL|1|Level of Structure|
|`Relationship_Type`| BIGINT(12) |NULL|1|id of relationship type|  
||	  
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`ParentBP`| (`Parent`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`ChildBP`| (`Child`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`Relationship_Type`| (`Relationship_Type`)| `BP-Relationship_Type` (`id`)| NO ACTION| NO ACTION|
||	  
| CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`| `Business_Partner_Structure`| (`Parent` ASC)| VISIBLE|.|
|`Child_idx` |`Business_Partner_Structure`| (`Child` ASC)| VISIBLE|.|
|`Relationship_Type_idx` |`Business_Partner_Structure`| (`Relationship_Type` ASC)| VISIBLE|.|

