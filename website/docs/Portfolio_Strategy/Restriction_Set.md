---
id: Restriction_Set
title: Restriction Set
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Restriction_Set

Names of the restriction sets. Client advisor can see the restrictions that are currently linked to 

investment strategy and client. There could be bank-wide restrictions and client-specific restrictions.

Restrictions are used in multiple diagnostics health check) views which may contain the following information:	

- Health Check type (Bulk, Asset Allocation, Currency Overlay, Portfolio Risk Class, Issuer Concentration, 

Instrument Concentration, Risk Return)	- Name, etc.										
				

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Name`|VARCHAR(45)|NULL|Portfolio Risk Class 20 Percent; Instrument Concentration 10 Percent;Risk Return Health Check;Issuer Concentration 20 Percent;
Risk SAA EUR Conservative|Name of the restriction set|
|`Owner`|BIGINT(12)|NULL|1|relate to BP or Person|
||
