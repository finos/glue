---
id: `CMA_Set`
title: `CMA_Set`
---

## Data Dictionary - Entity Table: `CMA_Set`

The Competition and Markets Authority (CMA) 

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`CMA_Set`|`id`| BIGINT(12)|PK, NN |.|
|`CMA_Set`|` Name` |VARCHAR(45)| NULL|.|
|`CMA_Set`|` Owner`| BIGINT(12)| NULL|.|
|`CMA_Set`|`Asset_Classification_Regime`|BIGINT(12)| NULL|.|
|`CMA_Set`|`Type`| ENUM("Szenario", "CMA")| NULL|.|
|`CMA_Set`|` Description`| TINYBLOB| NULL|.|
|For Table:`CMA_Set`|
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Asset_Classification_Regime`|(`Asset_Classification_Regime`)|`Asset_Classification_Regime` (`id`)| NO ACTION| NO ACTION|
|For Table:`CMA_Set`|
| CREATE INDEX|ON|ASC|VISABLE|.|
|`Asset_Classification_Regime_idx`|`CMA_Set`| (`Asset_Classification_Regime` ASC)| VISIBLE|.|
