---
id: Employee_To_Organizational_Entity_Type
title: Employee To Organizational Entity Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Employee_To_Organizational_Entity_Type

This is a lookup table for the Employee to Organizational Entity Relationship Type column in the table Employee to Organizational Entity Table. 

e.g: Member, Supervisor, etc.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Member|Name of the Employe and Organization relationship - models the Job responsibility that an employee holds in the Organization|
||
