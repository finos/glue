---
id: Financial_Account

title: Financial_Account
---

## Data Dictionary - Entity Table: Financial_Account

 Enter the Financial Account data, where applicable. 
 
 Type, Name, IBAN, Ex-Custody, Custodian, Portfolio
 
 What is a Custody in finance? 
  
  A service in which a brokerage or other financial institution holds securities on behalf of the client. 
  They are also available to the brokerage to sell at the client's demand. 
  Custody provides an investor a place to store assets with little risk.
 
A nominee company is a custodian charged with the safekeeping of investors' securities.
 
Custodians may hold investment assets and uninvested funds.

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Financial_Account`|`id`|BIGINT(12)|PK, NN|.|
|`Financial_Account`|`Type`|BIGINT(12)|NULL|.|
|`Financial_Account`|`Name`|VARCHAR(45)|NULL|.|
|`Financial_Account`|`IBAN`|VARCHAR(45)|NULL|.|
|`Financial_Account`|`Ex-Custody`|TINYINT |NULL|.|
|`Financial_Account`|`Custodian`|BIGINT(12)|NULL|.|
|`Financial_Account`|`Portfolio`|BIGINT(12)|NULL|.|
|For Table: `Financial_Account`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Portfolio`|(`Portfolio`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`Type`|(``Type`)|`Financial_Account_Type` (`id`)| NO ACTION|NO ACTION|
|`FillCurrency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
| `Fee_Currency`|( `Fee_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|For Table: `Financial_Account`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Portfolio_idx`|`Financial_Account`| (`Portfolio` ASC)| VISIBLE|.|
|`Type_idx`|`Financial_Account`| (`Type` ASC)| VISIBLE|.|
|`Currency_idx`|`Fill`|(`Currency` ASC)|VISIBLE|.|

