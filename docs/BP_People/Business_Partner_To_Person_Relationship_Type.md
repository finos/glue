---
id: Business_Partner_To_Person_Relationship_Type

title: Business_Partner_To_Person_Relationship_Type
---

## Data Dictionary - Entity Table: Business_Partner_To_Person_Relationship_Type`

This table stores the type of the relationships between business partner and person. 

It is lookup table with relationship names. Their meanings are described in the respective transaction table Business_Partner_To_Person_Relationship_Type.



|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id` |BIGINT(12) |PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)| NULL|Registered Owner, Account Owner, Beneficial Owner, Authority, Other|Type of the relationships between business partner and person|
