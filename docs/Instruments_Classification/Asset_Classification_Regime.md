---
id: Asset_Classification_Regime

title: Asset_Classification_Regime
---

## Data Dictionary- Table: Asset_Classification_Regime

Types of asset classification 
  
 
| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)| NULL|GICS| Type of classification e.g:gisc - Global investment classification standard; "by capitalization" for equities: large-, mid-, small-cap; "by issuer type": govn't and commercial bonds|
|`Owner`| BIGINT(12)| NULL|1|Owner of the Asset Classification Regime |
|`Depth`|INT| NULL|1|Number of classifiction layers|
||
