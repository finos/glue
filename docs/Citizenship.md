---
id: Citizenship

title: Citizenship
---
## Data Dictionary - Entity Table: `Citizenship`

A Person's citizenship

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Citizenship`|`id`| BIGINT(12)|PK, NN|.|
|`Citizenship`|`Name`| VARCHAR(45)|NULL|.|
|`Citizenship`|`Person`| BIGINT(12)|NULL|.|
|`Citizenship`|`Type`|BIGINT(12)|NULL|.|	  
|For Table:` Citizenship`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`CitizenshipPerson`|(`Person`)|`Person_PII` (`id`)|NO ACTION| NO ACTION|
|`CitizenshipType`|(`Type`)| `Citizenship_Type` (`id`)|NO ACTION| NO ACTION|
|For Table:` Citizenship`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Citizenship`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Citizenship`|(`Type` ASC)|VISIBLE|.| 
