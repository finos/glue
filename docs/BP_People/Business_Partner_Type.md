---
id: `Business_Partner_Type`
title: `Business_Partner_Type`
---

## Data Dictionary - Entity Table: `Business_Partner_Type`

Name of the business partner types. Here are an example of three types of business partners:

 internal (owned by the bank, these can be sundries or internal custodians), 
 
 external (entity that has a business relation with the bank but not as a customer, 
 
 this relation could be acting as a custodian, counterparty or creditor of the bank) and client.



| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id` |BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)| NULL|Organizational Unit, Employee,Client, External|Type of the business partner|
||
