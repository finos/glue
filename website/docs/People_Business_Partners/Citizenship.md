---
id: Citizenship
title: Citizenship
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Citizenship

A Person's citizenship. Citizenship of an individual person that impacts the relationships between advisor and their clients.

 E.g., citizenship can set additional rules on how to manage. i.e: some types of assets or advertisement tools might be forbidden

 in some countries.  Please Note: A person can have more than one citizenship.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)|NULL|DE GERMAN- Name of citizenship (upto 45 characters)|
|`Person`| BIGINT(12)|NULL|301|ID of Person PII record|
|`Type`|BIGINT(12)|NULL|123|Citizenship type id|  
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`CitizenshipPerson`|(`Person`)|`Person_PII` (`id`)|NO ACTION| NO ACTION|
|`CitizenshipType`|(`Type`)| `Citizenship_Type` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Person_idx`|`Citizenship`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Citizenship`|(`Type` ASC)|VISIBLE|.| 
||
