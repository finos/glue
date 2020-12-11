---
id: CMA_Set_Hierachy
title: CMA Set Hierachy
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: CMA_Set_Hierachy

**The Competition and Markets Authority (CMA)** 

**This table describes the hierarchy of cash management accounts of the client / portfolio**		

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`CMA_Set_Hierachy`|`Parent`| BIGINT(12) |NULL|1|Top of hierarchy (parent) of CMA Set|
|`CMA_Set_Hierachy`|`Child`| BIGINT(12) |NULL|1|Under parent hierarchy (child)of CMA Set|
||
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Parent`|(`Parent`)|`CMA_Set` (`id`)| NO ACTION| NO ACTION|
| `Child`|( `Child`)| `CMA_Set` (`id`)| NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Parent_idx`|`CMA_Set_Hierachy`|(`Parent` ASC)|VISIBLE||
|`Child_idx`|`CMA_Set_Hierachy`|(`Child` ASC)|VISIBLE||
||
