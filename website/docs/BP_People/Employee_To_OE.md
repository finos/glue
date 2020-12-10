---
id: Employee_To_OE

title: Employee To OE
---

## Data Dictionary - Entity Table: `Employee_To_OE`

From a business perspective, responsibilities within a bank can belong to an individual employee or several teams (direct responsibilities).

 But it is also common within the organizational structure of a bank for Employee and OE-Organizational Entity,  
 
 to share responsibilities e.g: as a supervisor of a team or as a member of a team. 

Examples of OE relations (how an OE/Employee relates to another OE/Employee): 

Members: Several employees typically form a team. An employee is represented by a Employee id and a team is represented by an OE-Organizational Entity id.

Supervisor: The members of a team are typically controlled by a team lead. Similarly, all other teams/divisions from higher up in the 

organizational hierarchy have a manager who is responsible for all underlying organizational entities.

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Relationship_Type`|BIGINT(12)|NULL|1|enter the relationship type id|
|`Employee`|BIGINT(12)|NULL|1|Enter the Employee id|
|`Name`|VARCHAR(45)|NULL|Primary|the name of the e-address|
|`OE`|BIGINT(12)|NULL|1|Enter organisational entity id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Employee_to_OE_OE`|(`OE`)|Organizational_Entitiy (`id`)|NO ACTION|NO ACTION|
|`Employee`|(`Employee`)| Bank_Employee` (`id`)| NO ACTION|NO ACTION|
|`EmployeetoOEType`|(`Relationship_Type`)| Employee_To_OE_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`OE_idx`|`Employee_To_OE`|(`OE` ASC)|VISIBLE||
|`Employee_idx`|`Employee_To_OE`|(`Employee` ASC)|VISIBLE||
|`Type_idx`|`Employee_To_OE`|(`Relationship_Type` ASC)|VISIBLE||
||
