
---
id: Region

title: Region
---

## Data Dictionary - Entity Table: Region

Region of the client address. Specific region can impose additional rules and restrictions on PII and other information.
For federal countries (Germany, USA) Region can be used to model states.		


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|European Union; Midwest (USA); Hesse (Germany)|Name of the region|
||
