---
id: CMA_Set_Hierachy

title: CMA_Set_Hierachy
---

## Data Dictionary - Entity Table: `CMA_Set_Hierachy`

The Competition and Markets Authority (CMA) 

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
||
|`CMA_Set_Hierachy`|`id`|BIGINT(12)| PK, NN|.|
|`CMA_Set_Hierachy`|`Parent`| BIGINT(12) |NULL|.|
|`CMA_Set_Hierachy`|`Child`| BIGINT(12) |NULL|.|
|For Table:`CMA_Set_Hierachy`|
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Parent`|(`Parent`)|`CMA_Set` (`id`)| NO ACTION| NO ACTION|
| `Child`|( `Child`)| `CMA_Set` (`id`)| NO ACTION| NO ACTION|
|For Table:`CMA_Set_Hierachy`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`CMA_Set_Hierachy`|(`Parent` ASC)|VISIBLE|.|
|`Child_idx`|`CMA_Set_Hierachy`|(`Child` ASC)|VISIBLE|.|
