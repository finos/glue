---
id: Business_Partner
title: Business_Partner
---

## Data Dictionary - Entity Table: Business_Partner

 A business partner is a natural or non-natural person a company is interacting with. 
 
 This could be a specific account, a contact or also an own employee.
 
 These entities are affected by similar business activities.

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
|| 
|`Business_Partner`|`id`| BIGINT(12)|PK,NN|.|
|`Business_Partner`|`Internal_ID`| VARCHAR(45)| NULL|.|
|`Business_Partner|`Nickname`| VARCHAR(45)| NULL|.|
|`Business_Partner|`Currency`| BIGINT(12)| NULL|.|
|`Business_Partner|`Business_Partner_Type` |BIGINT(12)|NULL|.|
| For Table:`Business_Partner’|
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
| `BPType| (`Business_Partner_Type`)| `Business_Partner_Type` (`id`)| NO ACTION| NO ACTION|
| For Table:`Business_Partner’|
| CREATE INDEX|ON|ASC|VISABLE|.|
| `Type_idx`| `Business_Partner`| (`Business_Partner_Type` ASC)| VISIBLE;|.|
