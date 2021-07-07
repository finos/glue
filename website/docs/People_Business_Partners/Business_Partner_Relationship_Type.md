---
id: Business_Partner_Relationship_Type
title: Business Partner Relationship Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Business_Partner_Relationship_Type

This is lookup table for the column business partner relationship. 
It contains the names of the relationship between business partner and other associated business partners. 
For example: Parent - Subsidary; Client-Primary Advisor-Secondary Advisor, etc.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Head of; Primary Client Advisor; Secondary Client Advisor|Name of relationship between business partner and associated business partner|
||
