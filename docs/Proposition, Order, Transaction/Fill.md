---
id: Fill

title: Fill
---

## Data Dictionary - Entity Table: Fill

This table describes part of an order (to trade a financial asset) that has been executed in the market. The fill table is a link between the portfolio management system and a corresponding execution management or trading system. 
One order can have multiple fills based on the trading volumes on the market and set limits for the order volumes.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Date_Time`|DATETIME|NULL|1/1/2020  12:30:30 PM|Date of filling the order|
|`ExternalID`|VARCHAR(45)|NULL|1|Order filling external id|
|`SequenceNumber`|BIGINT(6)|NULL|2|Fill sequence number|
|`Quantity`|DECIMAL|NULL|123|Filled quantity in units|
|`Price`|DECIMAL|NULL|12|Actual fill price|
|`Currency`|BIGINT(12)|NULL|3|Currency of the order|
|`Comission`|DECIMAL|NULL|20|Comission payment, e.g. brokerage comission|
|`Comission_Currency`|BIGINT(12)|NULL|3|Currency of the comission|
|`Fee`|DECIMAL|NULL|15|Fees paid during transactions|
|`Fee_Currency`|BIGINT(12)|NULL|3|Currency of the Fee|
|`Order`|BIGINT(12)|NULL|1|Order id. One order can have multiple fills|
|`Side`|VARCHAR(4)|NULL|buy, sell|Buy or sell order side|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Order`|(`Order`)|`Order` (`id`)| NO ACTION|NO ACTION|
|`Comission_Currency`|(`Comission_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`FillCurrency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`Fee_Currency`|( `Fee_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Order_idx`|`Fill`|(`Order` ASC)|VISIBLE|.|
|`Comission_Currency_idx`|`Fill`| (`Comission_Currency` ASC)| VISIBLE|.|
|`Currency_idx`|`Fill`|(`Currency` ASC)|VISIBLE|
|`Fee_Currency_idx`|`Fill`|(`Fee_Currency` ASC)|VISIBLE|.|
