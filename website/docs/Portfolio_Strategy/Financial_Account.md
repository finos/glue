---
id: Financial_Account
title: Financial Account
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Financial_Account

 Client's financial account used for securities trading (buy / sell) and transferring money for realized returns.
 
 What is a Custody in finance? 
  
  A service in which a brokerage or other financial institution holds securities on behalf of the client. 
  
  Custody provides an investor a place to store assets with little risk.
  
  Custodians may hold investment assets and uninvested funds.


| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Type`|BIGINT(12)|NULL|1| Classify the type of financial account|
|`Name`|VARCHAR(45)|NULL|ADV.1657|Financial account name|
|`IBAN`|VARCHAR(45)|NULL|DE89 1000 0000 0000 0000 00|The IBAN account number|
|`Ex-Custody`|TINYINT |NULL|1|Ex-custody is a position where the bank only conducts administrative custody and reporting tasks for the position (business partner) owner|
|`Custodian`|BIGINT(12)|NULL|1|Custodian account is managed by fiduciarily responsible party on behalf of a beneficiary|
|`Portfolio`|BIGINT(12)|NULL|1|Portfolio Id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Portfolio`|(`Portfolio`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`Type`|(`Type`)|`Financial_Account_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Portfolio_idx`|`Financial_Account`| (`Portfolio` ASC)| VISIBLE||
|`Type_idx`|`Financial_Account`| (`Type` ASC)| VISIBLE||
||
