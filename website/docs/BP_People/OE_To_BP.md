---
id: OE_To_BP
title: OE To BP
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: OE_To_BP

Enter the OE- organizational entity to BP-Business Partner Type

The responsibility of an employee/OE-Organizational entity for a customer of the bank is modeled via responsibility relations.

The organizational structure drives security. So, a Job User's data access is determined by his Job's responsibility relations. 

Examples: 

- Direct Responsibilities:		

Bank employees are modeled as person subtype "Job" and teams/divisions are modeled as person subtype "OE". 

Every object can have an OE/Job set as its responsible person (responsible). This relation between an OE/Job object and another object is called a direct responsibility.				

- Derived Responsibilities:				

Responsibility for one object can subsequently include responsibilities for related objects (e.g. the BP related to a certain OE). 

This type of responsibility is called derived responsibility within the organizational structure.				

The object that has a directly responsible OE/Job is the starting point. On the basis of this object, it is possible to customize 

the related objects for which derived responsibility will be calculated.	

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`BP`|BIGINT(12)|NULL||12| The BP-Business Partner |
|`OE`|BIGINT(12)|NULL||132| The OE-Organizational Entity|
|`Relationship_Type`|BIGINT(12)|NULL|33|Relationship Type|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`BP_Relationship`|(`BP`)|`Business_Partner` (`id`)| NO ACTION|NO ACTION|
|`OE_Relationship`|(`OE`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
|`OE_To_BP_Type`|(`Relationship_Type`)|`OE_TO_BP_TYPE` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`BP_idx`|`OE_To_BP`|(`BP` ASC) | VISIBLE||
|`OE_idx`|`OE_To_BP`|(`OE` ASC) | VISIBLE||
|`Type_idx`|`OE_To_BP`|(`Relationship_Type` ASC) | VISIBLE||
||
