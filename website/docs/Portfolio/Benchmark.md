---
id: Benchmark
title: Benchmark
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Benchmark

Benchmarks are indexes created to include multiple securities representing some aspect of the total market. 
Benchmark indexes have been created across all types of asset classes.  
Indexes constructed to measure the characteristics and performance of specific markets or asset classes are typically market cap weighted,  meaning the index constituents are weighted according to the total market cap or market value of their available outstanding shares.  
The indexes play an important role in the design, implementation and evaluation of an institutional investment portfolio.  While the Dow is a price-weighted index, other indexes are sometimes created differently. There are three general methods for building an index:
1.Price-weighted indexes give greater weight to the share price of each constituent.
2.Market value-weighted indexes give more weight to the size or market capitalization of each constituent.
3.Equal-weighted indexes treat all members the same, without regard to price or market cap.



| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
|| 
|`id` |BIGINT(12) |PK,NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name` |VARCHAR(45)| NULL|Nasdaq Composite|Name of the Benchmark|
|`Is_Composite`| TINYINT |NN|1|Composite is a benchmark that groups together many different securities or portfolios that are managed under similar investment mandate and strategy|
||
