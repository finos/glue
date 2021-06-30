---
id: Business_Partner_To_Person
title: Business_Partner_To_Person
---

## Data Dictionary - Entity Table: Business_Partner_To_Person

Relationship between business partner and person. The Business partner is connected with a person. 

One person can have multiple business partner objects.   

Typical example of relationship is that every business partner must have one registered owner.
1.For clients that means the person is the contractual owner of the bank account
2.For external parties that means an entity that owns a business partner used for business-related activities
3.For internal parties these are Entities of the bank itself that own the internal nostros, in-house accounting (e.g. ATM) and also the business partners that are business units
Example of other types of relationship are: account owner (the legal owner of the business partner) and beneficial owner (a person who benefits from the Business Partner Relationship).


|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Business_Partner`| BIGINT(12)| NULL|1|Business Partner ID|
|`Person`| BIGINT(12) |NULL|1|Person ID|
|`Relationship_Type`| BIGINT(12)| NULL |1|Relationship type id|
||
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Business_Partner`|(`Business_Partner`)|`Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Relationship_Type`|(`Relationship_Type`)|`Business_Partner_To_Person_Relationship_Type` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Person`| (`Person`)| `Person` (`id`)| NO ACTION| NO ACTION|
||
| CREATE INDEX|ON|ASC|VISABLE|.|
| `Business_Partner_idx`| `Business_Partner_To_Person`| (`Business_Partner` ASC)| VISIBLE|.|
| `Relationship_Type_idx`| `Business_Partner_To_Person`| (`Relationship_Type` ASC)| VISIBLE|.|
| `Person_idx`|`Business_Partner_To_Person`| (`Person` ASC)| VISIBLE|.|
||
