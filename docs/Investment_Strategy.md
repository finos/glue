---
id: Investment_Strategy

title: Investment_Strategy
---

## Data Dictionary - Entity Table: Investment_Strategy


Enter information for the Investment Strategy.

Types of Investment Strategy: Value Investing, Income Investing, Growth Investing, Small Cap Investing, Socially Responsible Investing

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Investment_Strategy`|`id`|BIGINT(12)|PK, NN|.|
|`Investment_Strategy`|`Risk_Profile`|BIGINT(12)|NULL|.|
|`Investment_Strategy`|`Service_Model`|BIGINT(12)|NULL|.|
|`Investment_Strategy`|`Restriction_Set`|BIGINT(12)|NULL|.|
|`Investment_Strategy`|`Benchmark`|BIGINT(12)|NOT NULL|.|
|`Investment_Strategy`|`CMA_Set`|BIGINT(12)|NULL|.|
|`Investment_Strategy`|`Name`|VARCHAR(45)|NULL|.|
|For Table: `Investment_Strategy`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Risk_Profile`|(`Risk_Profile`)|`Risk_Profile` (`id`)| NO ACTION|NO ACTION|
|`Restriction_Set`|(`Restriction_Set`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`CMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|`Benchmark`|(`Benchmark`)|`Benchmark`(`id`)| NO ACTION|NO ACTION|
|For Table: `Investment_Strategy`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Risk_Profile_idx`|`Investment_Strategy`|(`Risk_Profile` ASC) | VISIBLE|.|
|`Restriction_Set_idx`|`Investment_Strategy`| (`Restriction_Set` ASC)| VISIBLE|.|
|`CMA_Set_idx` |`Investment_Strategy`|(`CMA_Set` ASC) | VISIBLE|.|
|`Benchmark_idx` |`Investment_Strategy`|(`Benchmark` ASC)| VISIBLE|.|
