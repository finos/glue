---
id: Product_Hierachy

title: Product_Hierachy
---

## Data Dictionary - Entity Table: Product_Hierachy

Product_Hierarchy allows maintenance of flexible structure for the investment products

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Parent`|BIGINT(12)|NULL|1|Top of hierarchy (parent)|
|`Child`|BIGINT(12)|NULL|2|Under parent hierarchy (child)|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Parent_Product`|(`Parent`)|`Product` (`id`)| NO ACTION|NO ACTION|
|`Child_Product`|(`Child`)|`Product` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_Product_idx`|`Product_Hierachy`|(`Parent` ASC)| VISIBLE|.|
|`Child_Product_idx`|`Product_Hierachy`|(`Child` ASC)| VISIBLE|.|
||
 
