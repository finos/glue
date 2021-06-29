---
id: Financial_Account

title: Financial_Account
---

## Data Dictionary - Entity Table: Financial_Account

The financial account represent arrangement with financial institution so that the client can deposit money, settle transaction in appropriate currency, withdraw and contribute funds, etc. The type of account can determine the taxation rules, the liquidity risk and so on. 
An investor can have multiple financial accounts in their portfolio.


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Type`|BIGINT(12)|NULL|1| Classify the type of financial account|
|`Name`|VARCHAR(45)|NULL|ADV.1657|Financial account name|
|`IBAN`|VARCHAR(45)|NULL|DE89 1000 0000 0000 0000 00|The IBAN account number|
|`Ex-Custody`|TINYINT |NULL|1|Ex-custody is a position where the custodian only conducts administrative custody and reporting tasks for the position. If 1 = Ex-custody, if 0 = current custody.|
|`Custodian`|BIGINT(12)|NULL|1|Custodian is a legal fugure who has fiduciary obligation to the beneficient of the account. Can be the parent of a child with a trust fund set in the Organization or the Organization holding financial assets on behalf of client investor. Related to Business_Partner|
|`Portfolio`|BIGINT(12)|NULL|1|Portfolio Id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Portfolio`|(`Portfolio`)|`Portfolio` (`id`)| NO ACTION|NO ACTION|
|`Type`|(`Type`)|`Financial_Account_Type` (`id`)| NO ACTION|NO ACTION|
|`Custodian`|(`Custodian`)|`Business_Partner` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Portfolio_idx`|`Financial_Account`| (`Portfolio` ASC)| VISIBLE|.|
|`Type_idx`|`Financial_Account`| (`Type` ASC)| VISIBLE|.|
|`Custodian_idx`|`Financial_Account`| (`Custodian` ASC)| VISIBLE|.|
||