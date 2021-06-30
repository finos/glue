---
id: Benchmark_Constituent

title: Benchmark_Constituent
---

## Data Dictionary - Entity Table: Benchmark_Constituent

The constituents of a benchmark are the Instruments (usually company shares) that are component of an index. 
The aggregate of the weights of all constituents are used to calculate the value of the index based on the type of the Benchmark index. 
Relating the Contituents to Instrument Table allows scalability and the possibility to build client portfolios based on selected Benchmark.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
|| 
|`id`| BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Instrument`| BIGINT(12)| NULL|1|Instrument id from Instrument table.|
|`Weight`| DECIMAL |NULL|0.05|Price weighted index as a decimal. Share of the instrument in the respective benchmark. Having instrument return and weight, benchmark return could be calculated and  then further compared with client portfolio return.|
|`Benchmark`| BIGINT(12)| NULL|1| Benchmark id of the respective Benchmark to which the Constituents belong.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`ConstituentBenchmark`|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|
|`Instrument`|(`Instrument`)|`Instrument` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Benchmark_idx`|`Benchmark_Constituent`|(`Benchmark` ASC)| VISIBLE;|.|
|`Instrument_idx`|`Benchmark_Constituent`|(`Instrument` ASC)| VISIBLE;|.|
||
