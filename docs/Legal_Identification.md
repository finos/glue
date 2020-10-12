---
id: Legal_Identification

title: ILegal_Identification
---

## Data Dictionary - Entity Table: Legal_Identification


Enter information for the Legal_Identification

| Create Table if NOT EXISTS| Primary Key ('idLegal_Identification')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Legal_Identification`|`idLegal_Identification`|INT|PK, NN|.|
|`Legal_Identification`|`Identification`|VARCHAR(45)|NULL|.|
|`Legal_Identification`|`Identification_type`|BIGINT(12)|NULL|.|
|`Legal_Identification`|`Issuer_Country`|BIGINT(12)|NULL|.|
|`Legal_Identification`|`Issuer_place`|BIGINT(12)|NULL|.|
|`Legal_Identification`|`Issue_Date`|DATE|NULL|.|
|`Legal_Identification`|`Expiry_Date`|DATE|NULL|.|
|`Legal_Identification`|`Person`|BIGINT(12)|NULL|.|
|For Table: `Legal_Identification`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`LIPerson`|(`Person`)|`Person_PII` (`id`)| NO ACTION|NO ACTION|
|`Restriction_Set`|(`Restriction_Set`)|`Restriction_Set` (`id`)| NO ACTION|NO ACTION|
|`CMA_Set`|(`CMA_Set`)|`CMA_Set` (`id`)| NO ACTION|NO ACTION|
|`Benchmark`|(`Benchmark`)|`Benchmark`(`id`)| NO ACTION|NO ACTION|
|For Table: `Legal_Identification`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_PII` (`id`)`|`Legal_Identification`|(`Person` ASC) | VISIBLE|.|
