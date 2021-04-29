---
id: Electronic_Address

title: Electronic_Address
---

## Data Dictionary - Entity Table: Electronic_Address

Electronic address of a person or organization. 
Can be email, site, IP address.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Address`|VARCHAR(45)|NULL|client@glue.com|the e-address upto 45 characters|
|`Type`|BIGINT(12)|NULL|1|Type id of the address|
|`Name`|VARCHAR(45)|NULL|Information Center|In case of email address can represent sender name|
|`Person`|BIGINT(12)|NULL|1|ID of Preson PII record|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`EA_Person_PII`|(`Person`)|`Person_PII` (`id`)|NO ACTION|NO ACTION|
|`EAType`|(`Type`)| `Electronic_Address_Type` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Electronic_Address`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Electronic_Address`|(`Type` ASC)|VISIBLE|.|
||