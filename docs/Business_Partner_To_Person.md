---
id: Business_Partner_To_Person
title: Business_Partner_To_Person
---

## Data Dictionary - Entity Table: Business_Partner_To_Person

To Create a business partner with type 'Person'.

A business partner (person) in the employee role.

For example:

Business Partner Company (id) : "1000067",

Business Partner Person (id)" : "50000078",

Relationship type : "BUR001"


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Business_Partner_To_Person`|`id`| BIGINT(12)|PK, NN|.|
|`Business_Partner_To_Person`|`Business_Partner`| BIGINT(12)| NULL|.|
|`Business_Partner_To_Person`|Person| BIGINT(12) |NULL|.|
|`Business_Partner_To_Person`|`Relationship_Type`| BIGINT(12)| NULL |.|
|For Table: ` Business_Partner_To_Person`|
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Business_Partner`|(`Business_Partner`)|`Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Relationship_Type`|(`Relationship_Type`)|`Business_Partner_To_Person_Relationship_Type` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Person`| (`Person`)| `Person` (`id`)| NO ACTION| NO ACTION|
|For Table: ` Business_Partner_To_Person`|
| CREATE INDEX|ON|ASC|VISABLE|.|
| `Business_Partner_idx`| `Business_Partner_To_Person`| (`Business_Partner` ASC)| VISIBLE;|.|
| `Relationship_Type_idx`| `Business_Partner_To_Person`| (`Relationship_Type` ASC)| VISIBLE;|.|
| `Person_idx`|`Business_Partner_To_Person`| (`Person` ASC)| VISIBLE|.|

