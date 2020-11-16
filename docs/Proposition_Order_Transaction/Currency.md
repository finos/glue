---
id: Currency

title: Currency
---

## Data Dictionary - Entity Table: `Currency`

Enter the name of the Currency

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|.|AUTO_INCREMENT COMMENT 'Contains the external identifier of currency objects'|
|`Name`|VARCHAR(45)|NULL|Euro| Name of currency (upto 45 characters)|
||
