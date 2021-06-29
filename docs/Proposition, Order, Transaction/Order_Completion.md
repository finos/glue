---
id: Order_Completion

title: Order_Completion
---

## Data Dictionary - Entity Table: Order_Completion

Table shows the working status of an order from the Order Table. 
The status can be any valid order life cycle management status, e.g. rejected, done for day. It holds information for executed fills and the end value of the transactions. 
Separate fills/transactions can be created based on limits on the traded quantities. 

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Date`|DATETIME|NULL|10/10/2020  12:30:00 PM|Order completion date/time|
|`Status`|VARCHAR(42)|NULL|filled;working;cancelled;rejected;completed;expired|Order status - can show only status that means that part of the order is closed. One order can be completed with one completed fill and the remaining quantity rejected|
|`Filled_Quantity`|DECIMAL|NULL|243|Filled quantity of the order|
|`Remaining_Quantity`|DECIMAL|NULL|546|Remaining unfilled quantity of the order|
|`AvgPrice`|DECIMAL|NULL|12|Average execution price|
|`Currency`|BIGINT(12)|NULL|2|Order currency|
|`GrossValue`|DECIMAL|NULL|2940|Total value of the order: sum of order itself (net) plus charges (fees and comissions)|
|`NetValue`|DECIMAL|NULL|2916|Net value of the order (without fees and comissions)|
|`TotalCharges`|DECIMAL|NULL|24|Total sum of execution and other fees and comissions|
|`ChargeCurrency`|BIGINT(12)|NULL|1|Fees and comissions currency. Can differ from the currency of the order|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Currency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`Charge_Currency`|(`Charge_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Currency_idx`|`Order_Completion`|(`Currency` ASC) | VISIBLE|.|
|`Charge_Currency_idx`|`Order_Completion`|(`ChargeCurrency` ASC) | VISIBLE|.|
||