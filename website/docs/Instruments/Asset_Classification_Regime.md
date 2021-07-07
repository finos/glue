---
id: Asset_Classification_Regime
title: Asset Classification Regime
hide_table_of_contents: true
---

## Data Dictionary- Table: Asset_Classification_Regime

Asset Classification represents groups of instruments with similar financial characteristics, similar behavior in the markets or placed under similar regulations. Best practice for portfolio management relies on Strategic Asset Allocation and Tactical Asset Allocation to maintain a diversified portfolio with balanced risk and reward (as defined by MPT). 
In Glue, the Asset Classification tables permit the creation of arbitrary asset groups, e.g based on financial instrument, region, industry sector, etc, which can be hierarchicly structured. The Asset_Classification_Regime table holds information regarding the type of grouping that is applied to the instruments. 
Also includes information if this is internal classification or is it based on international standard. (i.e. GICS) 
  
 
| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id` |BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)| NULL|GICS, Asset Allocation Breakdown, Sector, Asset Type, Currency|Classification Regime can be standard: GICS for Sector, or can be arbitrary based on internal classification of the assets. For example Equity > Americas > Airlines which combines asset type, region and sector into one can be internally predefined classification|
|`Owner`| BIGINT(12)| NULL|1|Related to Business partner table. Column shows the owner of the Classification. Internal party to the Organization: Division, Team, Subsidiary or external party: GICS. Can be useful in the maintenance of different standards for the same type of classification, i.e. Sector.|
|`Depth`|INT| NULL|3|Number of classifiction layers|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|.|
|`Owner`|(`id`)|`Business_Partner` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Owner_idx`|`Asset_Classification_Regime`|(`Owner` ASC)| VISIBLE;|.|
||
