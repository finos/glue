---
id: Price_Quote

title: Price_Quote
---

## Data Dictionary - Entity Table: Price_Quote

The Price_Quote table is used to define different types of pricing mechanisms for Instruments. The user can define arbitrary types of pricing.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Per piece, Percentage, Discounted Cash Flow, Market Comparables|Price Quote type|
||