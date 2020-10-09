---
id: Currency

title: Currency
---

## Data Dictionary - Entity Table: `Currency`

Enter the name of the Currency

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Currency`|`id`|BIGINT(12)|PK, NN|AUTO_INCREMENT COMMENT 'Contains the external identifier of currency objects'|
|`Currency`|`Name`|VARCHAR(45)|NULL|.|
