---
id: Person_Relation_Type
title: Person Relation Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Person_Relation_Type

This is a lookup table for the Person_Relation_Type column in the Person_Relationship Table. 

Allows to model relationships between different persons, e.g. somebody may be trustee, son who is benefiting 

from specific account owned by his parent.

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|COMMENT|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID(auto creates)'Contains the person relation types'|
|`name`|VARCHAR(32)|NOT NULL|Representative; Community; RM; Trustee; Son|'Name of person relation|
||
