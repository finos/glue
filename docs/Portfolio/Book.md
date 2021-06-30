---
id: Book

title: Book
---

## Data Dictionary - Entity Table: Book

Book represents a booking center which is linked to the Organizational_entity table to represent a specific location or business unit within the Organization under which the customer portfolios are maintaned.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
|| 
|`id`|BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(255)| NULL|UK Onshore 1, UK Onshore 2, Switzerland Onshore, UK Offshore 1, US West, US Central|Full name of the Book upto 255 characters|
|`Organizational_Entity`| BIGINT(12)| NULL|1|Organizational entity|
||	  
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Organizational_Entity`|(`Organizational_Entity`)|`Organizational_Entitiy` (`id`)| NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Organizational_Entity_idx`|`Book`| (`Organizational_Entity` ASC)| VISIBLE;|.|
||	  

