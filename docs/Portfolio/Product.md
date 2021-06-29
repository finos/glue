---
id: Product

title: Product
---

## Data Dictionary - Entity Table: Product

Product table contains information regarding the parameters within which a portfolio is managed. Can be arbitraty name or mandate name.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Advisory Mandate, Discretionary Mandate, ExecutionOnly Mandate|Name of the product|
||