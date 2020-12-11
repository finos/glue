---
id: BP-Relationship_Type
title: BP-Relationship Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: BP-Relationship_Type

This is lookup table for the column Relationship_Type of the table Business_Partner_Structure.

It contains the names of the relationship between BP-business partner and associated business partner.

E.g: business person is a head of associated department or the relationship between advisor and client (each of them is separate BP) like client advisor.



| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|BIGINT(12)|NULL|Head of; Primary Client Advisor; Secondary Client Advisor|Name of relationship between business partner and associated business partner|
||
