---
id: Asset_Classification_Regime
title: Asset_Classification_Regime
---

## Data Dictionary- Table: Asset_Classification_Regime

<div class="text-white bg-blue mb-2"> Types of asset classification </div>
  
 
| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)| NULL|Global investment classification standard|Type e.g: By industry, By capitalization. For Equities: large-, mid-, small-cap. By issuer type: Govt / Commercial Bonds|
|`Owner`| BIGINT(12)| NULL|1|Owner of the Asset Classification Regime |
|`Depth`|INT| NULL|1|Number of classifiction layers|
||
