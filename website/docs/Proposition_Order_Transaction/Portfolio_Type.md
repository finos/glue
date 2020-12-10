---
id: Portfolio_Type

title: Portfolio_Type
---

## Data Dictionary - Entity Table: Portfolio_Type

This is a lookup table for the Type_id column in the table Portfolio.

There are four types of portfolios: Real, Simulated, Source, External. 

Wealth managers may want to create an investment proposition / proposal in order to simulate trades and investigate the impact 

upon their client portfolios. In such case, the engine copies the existing portfolio (called Source portfolio)

 and create a Simulated portfolio. Changes are then applied on the Simulated portfolio and compared with the Source portfolio.
 
 Wealth manager may want to create a virtual portfolio for existing or prospecting clients. This should create a new portfolio, 
 
 called external, which is stored and flagged accordingly. The external portfolio is linked to a new investment strategy 
 
 which can be set-up with the respective functions from the investment strategy manager 
 
 (define mandate, asset allocation and restrictions which attributes are mandatory shall be defined by config). 
 
 The functions for a real / and "a created simulated portfolio" apply for this external portfolio as well. 
 

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)'Contains the financial account type|
|`Name`|VARCHAR(45)|NULL|Real|example:  four types of portfolios: Real, Simulated, Source, External|
||
