---
id: Benchmark_Constituent
title: Benchmark_Constituent
---

## Data Dictionary - Entity Table: Benchmark_Constituent

Benchmarks are indexes created to include multiple securities representing some aspect of the total market. 

Benchmark indexes have been created across all types of asset classes. 

In the equity market, the S&P 500 and Dow Jones Industrial Average are two of the most popular large-cap stock benchmarks.

Indexes constructed to measure the characteristics and performance of specific markets or asset classes are typically market cap weighted,

 meaning the index constituents are weighted according to the total market cap or market value of their available outstanding shares.
 
 The indexes play an important role in the design, implementation and evaluation of an institutional investment portfolio.
 
 While the Dow is a price-weighted index, other indexes are sometimes created differently. There are three general methods for building an index:

Price-weighted indexes give greater weight to the share price of each constituent.

Market value-weighted indexes give more weight to the size or market capitalization of each constituent.

Equal-weighted indexes treat all members the same, without regard to price or market cap.


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
|| 
|`Benchmark_Constituent`|`id`| BIGINT(12)| NPK, NN|.|
|`Benchmark_Constituent`| `Instrument`| BIGINT(12)| NULL|.|
|`Benchmark_Constituent`| `Weight`| DECIMAL |NULL|.|
|`Benchmark_Constituent`|`Benchmark`| BIGINT(12)| NULL|.|
|For Table:`Benchmark_Constituent`|
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`ConstituentBenchmark`|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|
|For Table:`Benchmark_Constituent`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Benchmark_idx`|`Benchmark_Constituent`|(`Benchmark` ASC)| VISIBLE;|.|
