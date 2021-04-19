---
id: Employee_To_Organizational_Entity
title: Employee_To_Organizational_Entity
---

## Data Dictionary - Entity Table: Employee_To_Organizational_Entity

This table models the Job responsibilities within the Organizational Entity. 
Examples of Organizational Entity responibilities:
<br />**Members**: Several employees typically form a team. An employee is represented by a Employee and a team is represented by an Organizational Entity.
<br />**Supervisor**: The members of a team are typically controlled by a team lead. Similarly, all other teams/divisions from higher up in the 
organizational hierarchy have a manager who is responsible for all underlying organizational entities.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Relationship_Type`|BIGINT(12)|NULL|1|Relationship_type id|
|`Employee`|BIGINT(12)|NULL|1|Employee id from Employee table|
|`Organizational_Entity`|BIGINT(12)|NULL|1|Organizational entity id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Employee_to_OE_OE`|(`Organizational_Entity`)|Organizational_Entitiy (`id`)|NO ACTION|NO ACTION|
|`Employee`|(`Employee`)| Bank_Employee` (`id`)| NO ACTION|NO ACTION|
|`EmployeetoOEType`|(`Relationship_Type`)| Employee_To_OE_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`OE_idx`|`Employee_To_OE`|(`OE` ASC)|VISIBLE|.|
|`Employee_idx`|`Employee_To_OE`|(`Employee` ASC)|VISIBLE|.|
|`Type_idx`|`Employee_To_OE`|(`Relationship_Type` ASC)|VISIBLE|.|
||
