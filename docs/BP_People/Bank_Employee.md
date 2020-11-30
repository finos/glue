---
id: Bank_Employee
title: Bank_Employee
---

## Data Dictionary - Entity Table: Bank_Employee


Within the organisational structure, employee of the bank is modeled as a person.

Together with the organisational entity, an employee helps to model the different responsibilities within a banking organisation. 

They show who is responsible for different client-specific relationship.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
 | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example| Comment|
|| 
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Job_Function`| VARCHAR(45)| NULL|President| Job Function/Title of the employee|
|`Rank` |BIGINT(12)| NULL|3| Rank of the employee.|
|`Person`| BIGINT(12)| NULL|1|Person ID|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`BEPerson`|(`Person`)|`Person` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Bank_Employee`|(`Person` ASC)|VISIBLE|.|
||
