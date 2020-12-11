---
id: Business_Partner_Type
title: Business Partner Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: `Business_Partner_Type`

This is lookup table for the Business_Partner_Type (id) column in the table Business_Partner. 

It contains the names of the business partner types. 

Please find three typical examples of business partner types: 

- internal (owned by the bank, these can be sundries or internal custodians), 

- external (entity that has a business relation with the bank but not as a customer of the bank, this relation could be acting as a custodian, counterparty or creditor of the bank) and 

- client.



| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id` |BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)| NULL|Organizational Unit, Employee,Client, External|Type of the business partner|
||
