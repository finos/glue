---
id: Organization_Entity_To_Business_Partner_Type
title: Organization Entity To Business Partner Type
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Organization_Entity_To_Business_Partner_Type

This is a lookup table for the relationship between organizational entity (OE) to business partner (BP). 


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Name`|VARCHAR(45)|NULL|Has relationship manager; portfolio manager; etc|Based on the relationship that the Organization (ex. Bank) is having with the Business Partner (ex. internal, external, client)|
||
