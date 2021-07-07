---
id: Organizational_Entity
title: Organizational Entity
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Organizational_Entity


The teams/divisions of the organization are represented as Organizational entities. 
They relate to individuals and other organizations (Person) via the business relationships (Business Partner) and job responisbilities (Employee)


|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|12|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Switzerland Subsidiary;Wealth Advisory;Discretionary; DPM UHNWI (discretionary portfolio management of ultra-high-net-worth individuals) department|Name of the organizational entity (team, division, subsidiary)|
|`Internal_reference`|VARCHAR(45)|NULL|Team B|Enter an Internal Reference |
||
