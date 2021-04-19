
---
id: Country

title: Country
---

## Data Dictionary - Entity Table: `Country`
Lookup table for the country that individual person or Organization entity has in their address. 
For example any country names or country codes listed in ISO 3166 can be used or the organization can internally define convention for usage of country names.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)|NULL|Belgium| Name of country|
||		