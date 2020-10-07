---
id: Asset_Classification_Structure
title: Asset_Classification_Structure
---

## Data Dictionary- Table: Asset_Classification_Structure

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

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
| Asset_Classification_Structure|`id` |BIGINT(12)|PK, NN|
| Asset_Classification_Structure|`Parent`| BIGINT(12)| NULL|.|
| Asset_Classification_Structure|`Child` |BIGINT(12)| NULL|.|
| Asset_Classification_Structure|`Level`| INT| NULL|.|
|For Table: Asset_Classification_Structure|
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`ACParent`|(`Parent`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
|`ACChild`|(`Child`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
|For Table: Asset_Classification_Structure|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Node_idx`|`Asset_Classification_Structure`|(`Parent` ASC)|VISIBLE;|.|
|`Child_idx`|`Asset_Classification_Structure`|(`Child` ASC)|VISIBLE;|.|
