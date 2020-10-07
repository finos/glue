
---
id: Asset_Classification_Regime
title: Asset_Classification_Regime
---

## Data Dictionary- Table: Asset_Classification_Regime

The specification of how assets are classified, 

i.e. grouped into similar types, what these classes do/don’t represent and the attributes 

that should be collected for each class of asset.

This represents the classification (and functions) of an organisations portfolio of assets,

to ensure that assets are appropriately grouped, top down, and only relevant attributes collected.

Classification of financial assets. 

The IFRS 9 - principles based approach to the classification of financial assets,

which must be classified into one of four categories:

1. Amortised cost

2. FVTPL

3. Fair value through other comprehensive income (FVTOCI) for debt and

4. FVTOCI for equity.


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|
|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|
||
| Asset_Classification_Regime|`id` |BIGINT(12)|PK, NN|
| Asset_Classification_Regime|`Name`| VARCHAR(45)| NULL|
| Asset_Classification_Regime|`Owner`| BIGINT(12)| NULL|
| Asset_Classification_Regime|`Depth`|INT| NULL|
