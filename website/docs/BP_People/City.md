---
id: City

title: City
---

## Data Dictionary - Entity Table: `City`

Enter the Name of the cities that your Business Partners, Organisations and Individual person has in their address.
 
 An ID for that City will be automatically created.

|Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)|NULL|Brussels|Name of City (up to 45 characters)|
||
