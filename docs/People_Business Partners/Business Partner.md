---
id: Business_Partner
title: Business_Partner
---

## Data Dictionary - Entity Table: Business_Partner

Business partner (BP) represents business relationship.
A business partner can only exist within the system if a Person (individual, legal or person association, etc) has a business relationship with the bank. 
This relationship can be any sort of client, internal or external relationship that the bank has with individuals or legal entities. 
Every business partner must have one registered owner. 
o For clients that means the person is the contractual owner of the bank account
o For external parties that means an entity that owns a business partner used for business-related activities
o For internal parties these are Entities of the bank itself that own the internal nostros, in-house accounting (e.g. ATM) and also the business partners that are business units.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
|| 
|`id`| BIGINT(12)|PK,NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Internal_ID`| VARCHAR(45)| NULL|1995|enter internal id|
|`Nickname`| VARCHAR(45)| NULL|Client deposit account, CH Wealth Advisory|Contains the nickname of the partnership|
|`Currency`| BIGINT(12)|NULL|15|Currency can define the type of the BP between Person and the Organization. Example: Deposit Account in EUR
|`Business_Partner_Type` |BIGINT(12)|NULL|1|id of Business Partner|
||
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
| `BPType`| (`Business_Partner_Type`)| `Business_Partner_Type` (`id`)| NO ACTION| NO ACTION|
| `Currency`| (`Currency`)| `Currency` (`id`)| NO ACTION| NO ACTION|
||
| CREATE INDEX|ON|ASC|VISABLE|.|
| `Type_idx`| `Business_Partner`| (`Business_Partner_Type` ASC)| VISIBLE|.|
|`Currency_idx`|Currency|(`Currency` ASC)|VISIBLE|.|

