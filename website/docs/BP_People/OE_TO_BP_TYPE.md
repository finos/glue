---
id: OE_TO_BP_TYPE
title: OE TO BP TYPE
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: OE_TO_BP_TYPE

This is a lookup table for the OE TO BP Relationship type column in the OE to BP Table. 

Enter the Relationship Name of the OE- organizational entity to BP-Business Partner


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`OE_TO_BP_TYPE`|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`OE_TO_BP_TYPE`|`Name`|VARCHAR(45)|NULL|Has relationship manager; portfolio manager; etc|Relationship name|
||
