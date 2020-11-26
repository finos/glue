---
id: BP-Relationship_Type

title: BP-Relationship_Type
---

## Data Dictionary - Entity Table: BP-Relationship_Type

BP-Business Partner Relationship Type. Name of the relationship between business partner and associated business partner.

 Is used to define types of relationships between organisation BPs. 
 
 E.g: business person is a head of associated department as well as between advisor and client (each of them is also a BP)

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|BIGINT(12)|NULL|Head of; Primary Client Advisor; Secondary Client Advisor|Name of relationship between business partner and associated business partner|
||
