---
id: Electronic_Address

title: Electronic_Address
---

## Data Dictionary - Entity Table: Electronic_Address

Enter the Electronic_Address
An electronic address will generally contain a URI pointing to the object being described.
It can also contain an email or other electronic address.

Types e.g: email (Email address)

other (Other electronic address)

url (Uniform Resource Locator)

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Electronic_Address`|`id`|BIGINT(12)|PK, NN|.|
|`Electronic_Address`|`Address`|VARCHAR(45)|NULL|.|
|`Electronic_Address`|`Type`|BIGINT(12)|NULL|.|
|`Electronic_Address`|`Name`|VARCHAR(45)|NULL|.|
|`Electronic_Address`|`Person`|BIGINT(12)|NULL|.|
|For Table:`Electronic_Address`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`EA_Person_PII`|(`Person`)|`Person_PII` (`id`)|NO ACTION|NO ACTION|
|`EAType`|(`Type`)| `Electronic_Address_Type` (`id`)| NO ACTION|NO ACTION|
|For Table:`Electronic_Address`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Electronic_Address`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Electronic_Address`|(`Type` ASC)|VISIBLE|.|
