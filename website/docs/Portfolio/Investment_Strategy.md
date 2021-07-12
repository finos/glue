---
id: Investment_Strategy
title: Investment Strategy
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Investment_Strategy

Investment strategy is defined in an investment policy statement (i.e. the contractual agreement between client and organization) and is agreed with the client. 
It specifies what asset classes form the universe for investment and how portfolio will be managed to meet client needs and do not violate respective restrictions. 
The Table is related to Risk Profile, the Capital Market Assumption and the Restriction Set, which are all components of the Investment Strategy.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Risk_Profile`|BIGINT(12)|NULL|1|Risk_Profile_id|
|`Service_Model`|BIGINT(12)|NULL|1|Can be either standard investment strategy or tailored to clients specific needs|
|`Restriction_Set`|BIGINT(12)|NULL|1|Restriction_Set_id|
|`Benchmark`|BIGINT(12)|NULL|1|Id of the Benchmark linked to this Investment Strategy|
|`CMA_Set`|BIGINT(12)|NULL|1|CMA_Set_id|
|`Name`|VARCHAR(45)|NULL|SAA EUR Conservative;SAA USD Cautious;SAA JPY Balanced;SAA EUR Growth;SAA EUR Max Growth;TAA EUR Conservative|Name of the investment strategy|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Risk_Profile`|(`Risk_Profile`)|`Risk_Profile` (`id`)| NO ACTION|NO ACTION|
|`Restriction_Set`|(`Restriction_Set`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`CMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|`Benchmark`|(`Benchmark`)|`Benchmark`(`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Risk_Profile_idx`|`Investment_Strategy`|(`Risk_Profile` ASC) | VISIBLE|.|
|`Restriction_Set_idx`|`Investment_Strategy`| (`Restriction_Set` ASC)| VISIBLE|.|
|`CMA_Set_idx` |`Investment_Strategy`|(`CMA_Set` ASC) | VISIBLE|.|
|`Benchmark_idx` |`Investment_Strategy`|(`Benchmark` ASC)| VISIBLE|.|
||
