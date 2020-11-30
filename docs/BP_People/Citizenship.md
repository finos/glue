---
id: Citizenship

title: Citizenship
---

## Data Dictionary - Entity Table: `Citizenship`

Citizenship of an individual person that impacts the relationships between advisor and their clients.

Citizenship can set additional rules and restrictions on how to manage the portfolio, e.g: selected types of assets or marketing tools might be forbidden in some countries.

Please note that a person may have more than one citizenship.




| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`| BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)|NULL|DE GERMAN- Name of citizenship (upto 45 characters)|
|`Person`| BIGINT(12)|NULL|301|enter Person ID|
|`Type`|BIGINT(12)|NULL|123|	citizenship type id|  
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`CitizenshipPerson`|(`Person`)|`Person_PII` (`id`)|NO ACTION| NO ACTION|
|`CitizenshipType`|(`Type`)| `Citizenship_Type` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Citizenship`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Citizenship`|(`Type` ASC)|VISIBLE|.| 
||
