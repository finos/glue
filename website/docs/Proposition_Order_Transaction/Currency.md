---
id: Currency
title: Currency
---

## Data Dictionary - Entity Table: `Currency`

Table with currency names. Used in multiple views to see currency of the portfolio, 

instrument, etc. One of the key view is clients' assets distributed across currencies in order to

explore their currency exposure. This view offers two options: Risk Currency and Trade Currency.	

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|AUTO_INCREMENT COMMENT 'Contains the external identifier of currency objects'|
|`Name`|VARCHAR(45)|NULL|Euro, Risk, Trade| Name of currency|
||
