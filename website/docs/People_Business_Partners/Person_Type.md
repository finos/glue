---
id: Person_Type	
title: Person Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Person_Type

This is a lookup table for the Person_Type column in the Person Table. 

The Person relates to several Person Types, e.g. Individual, Association, Corporation, Trust.			


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Individual; Association; Corporation; Trust|Type of Person - individual or legal entity.|
||
  
