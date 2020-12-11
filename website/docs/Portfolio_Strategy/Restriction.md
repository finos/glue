---
id: Restriction
title: Restriction
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Restriction

**Separate restriction name and the mode for its check. E.g., limit specific assets (e.g. no more than 2% of Amazon)**

**or limit specific industries (e.g. no Tobacco) - this can be done on any level of the GICS structure.**		

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|Amazon; Tobacco|Name of the restriction|
|`Owner`|BIGINT(12)|NULL|1|should be related to person or BP table|
|`Pre_Deal_Check`|TINYINT|NULL|1|Determines to check this restriction or not, before conducting the deal (transaction) to assure it will not break restriction threshold|
|`Batch_Check`|TINYINT|NULL|1|Determines whether to check this restriction regularly on a batch basis|
|`Overridable`|TINYINT|NULL|0|Determines whether it could be overridden by the client advisor or alternative restriction|
||
