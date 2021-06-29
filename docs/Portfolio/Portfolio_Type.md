---
id: Portfolio_Type

title: Portfolio_Type
---

## Data Dictionary - Entity Table: Portfolio_Type

Lookup table with the Portfolio types. This is user defined field that can be used to classify differnet portfolios based on internal business rules. Example: Actual, External, Simulated.					

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|1|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|Real|Example: four types of portfolios: Real, Simulated, Actual, External|
||
  
