---
id: CMA_Set

title: CMA_Set
---

## Data Dictionary - Entity Table: CMA_Set

The CMA_Set table contains multiple scenarios/assumptions based on asset classification, state of the market, Business partner which conducted the evaluation, etc. Capital Market Assumptions (CMA) represent the risk and return assumptions for a distinct group of assets. 
CMA plays important role in the Strategic (SAA) and Tactic Asset Allocation (TAA). The CMA set can be based on internally developed Scenario or on general Capital Market Assumption. 
This provides flexibility for building individual Investment strategies (by adjusting the TAA)  in different market conditions.

|Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|-----|-----|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|US Treasury; UK Equity in Moderate Bull Market|Name of CMA Set/Scenario|
|`Owner`| BIGINT(12)|NULL|203|Owner signifies the provider of the evaluation for CMA in case it is external Business Partner, e.g. Market data provider, Research Analyst or external Investment Manager or Investment Bank. Such relation allows reference to methodologies and public reports.|
|`Asset_Classification_Regime`|BIGINT(12)| NULL|1|Asset classification regime id|
|`Type`|ENUM("Scenario", "CMA")|NULL|scenario;CMA|Only two possibilities are allowed for CMA_Set Type: Scenario (based on specific assumptions for the market) or CMA (Baseline scenario for specific asset class)|
|`Description`|TINYBLOB|NULL|Completing Brexit would impair growth, as domestic firms face costs of doing business with their largest trading partners in Europe, pushing up wages and inflation... |CMA Set Description can provide insight into why the specific scenario is choosen or short text containing the investor expectation for the market|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Asset_Classification_Regime`|(`Asset_Classification_Regime`)|`Asset_Classification_Regime` (`id`)| NO ACTION| NO ACTION|
|`Owner`|(`Owner`)|`Business_Partner` (`id`)| NO ACTION| NO ACTION|
||
| CREATE INDEX|ON|ASC|VISABLE|.|
|`Asset_Classification_Regime_idx`|`CMA_Set`| (`Asset_Classification_Regime` ASC)| VISIBLE|.|
|`Owner_idx`|`CMA_Set`| (`Owner` ASC)| VISIBLE|.|
||
