---
id: Person_Relation_Type

title: Person_Relation_Type
---

## Data Dictionary - Entity Table: Person_Relation_Type

Comments: The id 'Contains the person relation types'

The name : 'Name of person relation (internal use only - no dictionary)'

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|COMMENT|
||
|`Person_Relation_Type`|`id`|BIGINT(12)|PK, NN|'Contains the person relation types'|
|`Person_Relation_Type`|`name`|VARCHAR(32)|NOT NULL|'Name of person relation (internal use only - no dictionary)'|
||
