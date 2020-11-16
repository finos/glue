---
id: Financial_Account_Type

title: Financial_Account_Type
---

## Data Dictionary - Entity Table: Financial_Account_Type

Enter the Name ofFinancial Account types: Assets, Liabilities, Equity, Revenue and Expenses. 

( cash management account, brokerage, deposit , etc.) the Financial_Account_Type 


|  Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Cash; Deposit|Enter Name of the Financial_Account_Type|
||
