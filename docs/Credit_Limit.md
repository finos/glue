---
id: Credit_Limit

title: Credit_Limit
---

## Data Dictionary - Entity Table: Credit_Limit

Portfolio facility is supported; i.e: there are multiple sublines under the main line and each of the
sublines have a different account linked. Both Fixed and/or Variable rates can be linked besides purchasing a
Rate Lock. 



| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Credit_Limit`|`id`|BIGINT(12)|PK, NN|COMMENT 'Contains the credit limit objects'|
|`Credit_Limit`|`credit_limit_identier_id`| BIGINT(12)| NULL |COMMENT 'ID of credit limit identifier'|
|`Credit_Limit`|`portfolio_id`|BIGINT(12)| NULL |COMMENT 'ID of the portfolio'|
|`Credit_Limit`|`granted_limit`|DECIMAL(25,9)|NULL|COMMENT 'Maximum lending limit of the portfolio\n'|
|`Credit_Limit`|`lending_value`|DECIMAL(25,9)|NULL|COMMENT 'Maximum aggregated lending value of the portfolio\n'|
|For Table: `Credit_Limit`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`portfolio_id`|(`portfolio_id`)|`Portfolio` (`id`)|NO ACTION|NO ACTION|
|For Table: `Credit_Limit`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`portfolio_id_idx`|`Credit_Limit`|(`portfolio_id` ASC)| VISIBLE;|.|
