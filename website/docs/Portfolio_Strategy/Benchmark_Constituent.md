---
id: Benchmark_Constituent
title: Benchmark Constituent
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Benchmark_Constituent

Benchmarks are indexes created to include multiple securities representing some aspect of the total market. 

Benchmark indexes have been created across all types of asset classes. 

Indexes constructed to measure the characteristics and performance of specific markets or asset classes are typically market cap weighted,

 meaning the index constituents are weighted according to the total market cap or market value of their available outstanding shares.
 
 The indexes play an important role in the design, implementation and evaluation of an institutional investment portfolio.
 
 While the Dow is a price-weighted index, other indexes are sometimes created differently. There are three general methods for building an index:

Price-weighted indexes give greater weight to the share price of each constituent.

Market value-weighted indexes give more weight to the size or market capitalization of each constituent.

Equal-weighted indexes treat all members the same, without regard to price or market cap.


| Primary Key ('id')|.|ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
|| 
|`id`| BIGINT(12)| NPK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Instrument`| BIGINT(12)| NULL|1|enter Instrument|
|`Weight`| DECIMAL |NULL|0.05|Price weighted index as a decimal. Share of the instrument in respective benchmark. With instrument return and weight, benchmark return could be calculated, then further compared with client portfolio return|
|`Benchmark_Constituent`|`Benchmark`| BIGINT(12)| NULL|1|enter Benchmark|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`ConstituentBenchmark`|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Benchmark_idx`|`Benchmark_Constituent`|(`Benchmark` ASC)| VISIBLE;||
||
