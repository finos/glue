---
id: Risk_Profile

title: Risk_Profile
---

## Data Dictionary - Entity Table: Risk_Profile

We assume that banks will allocate customers to predefined risk categories based on their investment experience and objectives. 
The risk categories are defined in table Risk_Type. The Risk_Profile table links  risk categories to investment strategies and defines a threshold risk measure for each strategy within the risk category.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comment|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Risk_Type`|BIGINT(12)|NULL|3|Risk id from the Risk_type table|
|`Risk_Value`|DECIMAL(25,9)|NULL|0.07|Each risk profile is expected to have a risk measure associated with it. This could be standard deviation, VaR, beta, etc. This column store the maximum permitted risk value for a portfolio to conform to the profile.|
||
