---
id: CMA_Set

title: CMA_Set
---

## Data Dictionary - Entity Table: `CMA_Set`

The Competition and Markets Authority (CMA) 

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|` Name` |VARCHAR(45)| NULL|gscheck|Name of CMA Set |
|` Owner`| BIGINT(12)| NULL|1|CMA Set owner id. could be linked to Business Person/Person table|
|`Asset_Classification_Regime`|BIGINT(12)| NULL|1|Asset classification regime id|
|`Type`| ENUM|| NULL|scenario;CMA|CMA set type|
|` Description`| TINYBLOB| NULL|CMA Set description|.|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Asset_Classification_Regime`|(`Asset_Classification_Regime`)|`Asset_Classification_Regime` (`id`)| NO ACTION| NO ACTION|
||
| CREATE INDEX|ON|ASC|VISABLE|.|
|`Asset_Classification_Regime_idx`|`CMA_Set`| (`Asset_Classification_Regime` ASC)| VISIBLE|.|
||
