---
id: Electronic_Address_Type

title: Electronic_Address_Type
---

## Data Dictionary - Entity Table: Electronic_Address_Type

This is a lookup table for the Electronic Address_type column in the table Electronic Address.
It could be business, personal email, official website, etc.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Business email|Name of a type of Electronic Address|
||
