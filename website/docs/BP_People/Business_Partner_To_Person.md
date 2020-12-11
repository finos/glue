---
id: Business_Partner_To_Person
title: Business Partner To Person
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Business_Partner_To_Person

Relationship between BP- business partner and person. The Business partner is connected with a person. 

One person can have multiple business partners.

 Every business partner must have one registered owner.

The Account Owner is the legal owner of the business partner.

A Beneficial Owner is a person who benefits from the Business Partner Relationship that represents customers.

An authority is not a business partner ownership such as the registered ownership or the account ownership. 

The holder of an authority can initiate certain transactions on the business partner and its allocated containers and money accounts.

Please see table Business_Partner for BP definition.


|Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Business_Partner`| BIGINT(12)| NULL|1|BP ID|
|Person| BIGINT(12) |NULL|1|Person ID|
|`Relationship_Type`| BIGINT(12)| NULL |1|Relationship type id|
||
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Business_Partner`|(`Business_Partner`)|`Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Relationship_Type`|(`Relationship_Type`)|`Business_Partner_To_Person_Relationship_Type` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Person`| (`Person`)| `Person` (`id`)| NO ACTION| NO ACTION|
||
| CREATE INDEX|ON|ASC|VISABLE||
| `Business_Partner_idx`| `Business_Partner_To_Person`| (`Business_Partner` ASC)| VISIBLE||
| `Relationship_Type_idx`| `Business_Partner_To_Person`| (`Relationship_Type` ASC)| VISIBLE||
| `Person_idx`|`Business_Partner_To_Person`| (`Person` ASC)| VISIBLE||
