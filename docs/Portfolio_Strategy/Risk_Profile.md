---
id: Risk_Profile

title: Risk_Profile
---

## Data Dictionary - Entity Table: Risk_Profile

**Each investment strategy has its own risk profile which determine its volatility.**

**Risk profile of the strategy should be similat to client's risk profile (their ability and willingness to take risk)**		


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Risk_Type`|BIGINT(12)|NULL|3|See Risk_Type Table|
|`Risk_Value`|DECIMAL(25,9)|NULL|0.07|Expected volatility of risk strategy|
||
