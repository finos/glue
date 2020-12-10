---
id: Business_Partner
title: Business Partner
---

## Data Dictionary - Entity Table: Business_Partner

Business Partner represents the business relationship. 

A business partner can only exist within the system if a person (individual, legal or person association, etc)

has a business relationship with the bank. 

This table does not contain PII, so only BP nickname is displayed here. Actual names can be resolved via person-related tables.

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
|| 
|`id`| BIGINT(12)|PK,NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Internal_ID`| VARCHAR(45)| NULL|1995|enter internal id|
|`Nickname`| VARCHAR(45)| NULL|Albus Dumbledore|Nickname of business partner|
|`Business_Partner_Type` |BIGINT(12)|NULL|1|id of Business Partner|
||
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE||
| `BPType| (`Business_Partner_Type`)| `Business_Partner_Type` (`id`)| NO ACTION| NO ACTION|
||
| CREATE INDEX|ON|ASC|VISABLE||
| `Type_idx`| `Business_Partner`| (`Business_Partner_Type` ASC)| VISIBLE||
