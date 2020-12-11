---
id: Book
title: Book
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Book

There are trading and banking books where portfolio instruments are registered. 

Trading book cointains instruments that are actively traded and are required to be mark-to-market. 

Banking book registers instruments that are held till maturity.

This table is related to portfolio table. e.g: A Book where portfolios are registered by location. 

As, it may not be of trading/banking book, but another book where portfolios are registered by location. 

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
|| 
|`id`|BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`| VARCHAR(45)| NULL|Trading Swiss; Banking London|Full name of the Book|
|`OE’| BIGINT(12)| NULL|1|OE- organizational entity|
||	  
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`OE`|(`OE`)|`Organizational_Entitiy` (`id`)| NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`OE_idx`|`Book`| (`OE` ASC)| VISIBLE;||
||	  

