---
id: Benchmark
title: Benchmark
---

## Data Dictionary - Entity Table: Benchmark

**Benchmark is a standard against which the performance of portfolio or investment strategy is measured.**

Benchmark indexes have been created across all types of asset classes. 



| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
|| 
|`id` |BIGINT(12) |PK,NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name` |VARCHAR(45)| NULL|Nasdaq Composite|Name of the Benchmark (upto 45 Characters)
|`Is_Composit`| TINYINT |NULL|1|Composite is a benchmark that groups together many different securities or portfolios that are managed under similar investment mandate and strategy|
||
