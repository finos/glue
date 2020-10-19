---
id: Financial_Account_Type

title: Financial_Account_Type
---

## Data Dictionary - Entity Table: Financial_Account_Type

Enter the Name of the Financial_Account_Type 

Account types: Assets, Liabilities, Equity, Revenue and Expenses. 


| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|
|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|
||
|`Financial_Account_Type`|`id`|BIGINT(12)|PK, NN|
|`Financial_Account_Type`|`Name`|VARCHAR(45)|NULL|
||
