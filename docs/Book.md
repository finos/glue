---
id: Book
title: Book
---

## Data Dictionary - Entity Table: Book

OE- organizational entity.

Name- Full name of the organization

Organization, Fund, and Entity, refer to a business unit that maintains separate financial books. 
A "fund" is specific type of organization or entity.


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
|| 
|`Book`|`id`|BIGINT(12)| PK, NN|.|
|`Book`|`Name`| VARCHAR(45)| NULL|.|
|`Book`|`OE’| BIGINT(12)| NULL|.|
|For Table:`Book’|	  
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`OE`|(`OE`)|`Organizational_Entitiy` (`id`)| NO ACTION| NO ACTION|
| For Table:`Book’|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`OE_idx`|`Book`| (`OE` ASC)| VISIBLE;|.|
	  
