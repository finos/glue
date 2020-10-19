---
id: Person_PII

title: Person_PII
---

## Data Dictionary - Entity Table: Person_PII

PII - Personally identifiable information

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Person_PII`|`id`|BIGINT(12)|PK, NN|.|
|`Person_PII`|`Person`|BIGINT(12)|NULL|.|
|`Person_PII`|`First_Name`|VARCHAR(45)|NULL|.|
|`Person_PII`|`Middle_Name`|VARCHAR(45)|NULL|.|
|`Person_PII`|`Last_Name`|VARCHAR(45)|NULL|.|
|`Person_PII`|`Birth_Date`|DATE|NULL|.|
|`Person_PII`|`Title`|BIGINT(12)|NULL|.|
|`Person_PII`|`Language`|BIGINT(12)|NULL|.|
|`Person_PII`|`Organization_Name`|VARCHAR(45)|NULL|.|
|For Table: `Person_PII`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Title`|(`Title`)|`Title` (`id`)| NO ACTION|NO ACTION|
|`Language`|(`Language`)|`Language` (`id`)| NO ACTION|NO ACTION|
|For Table: `Person_PII`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Title_idx`|`Person_PII`|(`Title` ASC) | VISIBLE|.|
|`Language_idx`|`Person_PII`|(`Language` ASC) | VISIBLE|.|
