---
id: Business_Partner_To_Person_Relationship_Type
title: Business Partner To Person Relationship Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Business_Partner_To_Person_Relationship_Type

This table is a lookup with  the type of the relationships between business partner and person.

|Primary Key ('id')| |ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id` |BIGINT(12) |PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)| NULL|Registered Owner, Account Owner, Beneficial Owner, Authority, Other|Type of the relationships between business partner and person|
||
