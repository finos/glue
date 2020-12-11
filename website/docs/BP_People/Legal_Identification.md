---
id: Legal_Identification
title: Legal Identification
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Legal_Identification

Enter Legal Identification documents of the person. Column Person is the Person ID found in the PersonII table.


| Primary Key ('idLegal_Identification')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`idLegal_Identification`|INT|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Identification`|VARCHAR(45)|NULL|national passport: AA 11 111|name of the id|
|`Identification_type`|BIGINT(12)|NULL|1|national passport, driver license|
|`Issuer_Country`|BIGINT(12)|NULL|12|country id from Country table|
|`Issuer_place`|BIGINT(12)|NULL|33|issuer place written on id|
|`Issue_Date`|DATE|NULL|10/10/99|issue date of id|
|`Expiry_Date`|DATE|NULL|12/12/22|expiration date on id|
|`Person`|BIGINT(12)|NULL|12|Person id related to the Person PII id|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`LIPerson`|(`Person`)|`Person_PII` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`Person_idx`|`Legal_Identification`|(`Person` ASC) | VISIBLE||
||
