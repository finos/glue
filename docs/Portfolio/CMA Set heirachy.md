

---
id: CMA_Set_Hierarchy

title: CMA_Set_Hierarchy
---

## Data Dictionary - Entity Table: CMA_Set_Hierarchy

Capital Market Assumptions (CMA) represent the risk and return assumptions for a distinct group of assets. 
The CMA hierarchy allows flexible construction of risk assumptions based on different scenarios grouped together under the hierarchy e.g. Equity-> Global Equity -> Global Equity in Strong Bear Market or Best case COVID recovery -> Equity/FI/Commodity -> Europe/US/APAC.	

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`| BIGINT(12) |NULL|1|Top of hierarchy (parent) of CMA Set|
|`Child`| BIGINT(12) |NULL|1|Under parent hierarchy (child)of CMA Set|
||
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Parent`|(`Parent`)|`CMA_Set` (`id`)| NO ACTION| NO ACTION|
| `Child`|( `Child`)| `CMA_Set` (`id`)| NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`CMA_Set_Hierachy`|(`Parent` ASC)|VISIBLE|.|
|`Child_idx`|`CMA_Set_Hierachy`|(`Child` ASC)|VISIBLE|.|
||