---
id: Financial_Account_Type
title: Financial Account Type
---

## Data Dictionary - Entity Table: Financial_Account_Type

This is a lookup table for the Type column in the table Financial_Account. 

Types of the financial accounts: cash management account, brokerage, deposit, etc.	

|  Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Cash; Deposit|Enter Name of the Financial_Account_Type|
||
