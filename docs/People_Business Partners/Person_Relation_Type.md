---
id: Person_Relation_Type
title: Person_Relation_Type
---

## Data Dictionary - Entity Table: Person_Relation_Type

This is a lookup table for the Person Relation Type. 

Allows to model relationships between different persons, e.g. somebody may be trustee, son who is benefiting 

from specific account owned by his parent.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|COMMENT|
||
|`id`|BIGINT(12)|PK, NN|1|Contains the person relation types|
|`name`|VARCHAR(32)|NOT NULL|Representative; Community; RM; Trustee; Son|Name of person relation|
||
  
