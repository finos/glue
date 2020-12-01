---
id: Role

title: Role 
---

## Data Dictionary - Entity Table: Role

User role names to model security and access rights	


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|Booking center; Department;Team; Client Advisor; Client|Name of the role|
||
