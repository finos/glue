
---
id: Benchmark
title: Benchmark
---

## Data Dictionary - Entity Table: Benchmark

Benchmarks are indexes created to include multiple securities representing some aspect of the total market. 
Benchmark indexes have been created across all types of asset classes. 
In the equity market, the S&P 500 and Dow Jones Industrial Average are two of the most popular large-cap stock benchmarks.


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|
|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|
|| 
|`Benchmark`|`id` |BIGINT(12) |PK,NN|
|`Benchmark`|`Name` |VARCHAR(45)| NULL|
|`Benchmark`| `Is_Composit`| TINYINT |NULL|
