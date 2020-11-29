---
id: Organizational_Entitiy

title: Organizational_Entitiy
---

## Data Dictionary - Entity Table: Organizational_Entitiy


The teams/divisions in which the employees are working are represented by an OE-Organizational Entity id .


|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|12|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Switzerland Subsidiary;Wealth Advisory;Discretionary; DPM UHNWI (discretionary portfolio management of ultra-high-net-worth individuals) department|OE Name|
|`Internal_reference`|VARCHAR(45)|NULL|Team B|Enter an Internal Reference |
||
