---
id: Bank_Employee
title: Bank_Employee
---

## Data Dictionary - Entity Table: Bank_Employee

Within the organisational structure, employees of the bank are modeled as a Person under the subtype employee (Job Function).

Together with organisational entity, these non client Employee help to model the different responsibilities within a banking organisation. 

They show who is responsible for different client-specific relationship.

If the organisational structure drives data access security, the Job Function, which models an employee, 

it will be linked to the user through which this employee logs into the system.

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
