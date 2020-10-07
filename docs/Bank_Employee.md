
---
id: Bank_Employee
title: Bank_Employee
---

## Data Dictionary - Entity Table: Bank_Employee

For Bank Employee information. Their Job Function, Rank, Person

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
|| 
| Bank_Employee|`id`| BIGINT(12)|PK, NN|.|
| Bank_Employee|`Job_Function`| BIGINT(12)| NULL|.|
| Bank_Employee|`Rank` |BIGINT(12)| NULL|.|
| Bank_Employee|`Person`| BIGINT(12)| NULL|.|
|For Table: Bank_Employee|
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`BEPerson`|(`Person`)|`Person` (`id`)|NO ACTION| NO ACTION|
|For Table: Bank_Employee|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Bank_Employee`|(`Person` ASC)|VISIBLE;|.|
