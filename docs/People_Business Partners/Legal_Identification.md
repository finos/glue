---
id: Legal_Identification
title: Legal_Identification
---

## Data Dictionary - Entity Table: Legal_Identification

Stores Legal Identification documents of the person.

| Primary Key ('idLegal_Identification')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`idLegal_Identification`|INT|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Identification`|VARCHAR(45)|NULL|AA 11 111|Identification document number|
|`Identification_type`|VARCHAR(45)|NULL|1|Type of identification, e.g. national passport, driver license|
|`Issuer_Country`|BIGINT(12)|NULL|12|country id from Country table|
|`Issuer_place`|BIGINT(12)|NULL|33|Address ID from Address table|
|`Issue_Date`|DATE|NULL|10/10/99|issue date of id|
|`Expiry_Date`|DATE|NULL|12/12/22|expiration date on id|
|`Person`|BIGINT(12)|NULL|12|Person ID found in the Person_PII table|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`LIPerson`|(`Person`)|`Person_PII` (`id`)| NO ACTION|NO ACTION|
|`Issuer_Country`|('Id')|`Country `(`id`)| NO ACTION|NO ACTION|
|`Issuer_Place`|('Id')|`Address` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISIBLE|.|
|`Person_idx`|`Legal_Identification`|(`Person` ASC) | VISIBLE|.|
|`Issuer_Country`|`Legal_Identification`|(`Issuer_Country` ASC) | VISIBLE|.|
|`Issuer_Place`|`Legal_Identification`|(`Issuer_Place` ASC) | VISIBLE|.|
||
