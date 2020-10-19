---
id: Business_Partner_To_Person_Relationship_Type`
title: Business_Partner_To_Person_Relationship_Type`
---

## Data Dictionary - Entity Table: Business_Partner_To_Person_Relationship_Type`

To Create a business partner with type 'Person'.

A business partner (person) in the employee role.

For example:

Business Partner Company (id) : "1000067",

Business Partner Person (id)" : "50000078",

Relationship type : "BUR001"

Create a Relationship Type Name


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|
|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|
||
|`Business_Partner_To_Person_Relationship_Type`|`id` |BIGINT(12) |PK, NN|
|`Business_Partner_To_Person_Relationship_Type`|`Name`|VARCHAR(45)| NULL|
