---
id: Electronic_Address_Type

title: Electronic_Address_Type
---

## Data Dictionary - Entity Table: Electronic_Address_Type

Enter the Electronic_Address_Type
An electronic address will generally contain a URI pointing to the object being described.
It can also contain an email or other electronic address.

OE- organizational entity.

Types e.g: email (Email address)

other (Other electronic address)

url (Uniform Resource Locator)

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Electronic_Address_Type`|`id`|BIGINT(12)|PK, NN|.|
|`Electronic_Address_Type`|`Relationship_Type`|BIGINT(12)|NULL|.|
|`Electronic_Address_Type`|`Employee`|BIGINT(12)|NULL|.|
|`Electronic_Address_Type`|`OE`|BIGINT(12)|NULL|.|
|For Table:` Electronic_Address_Type`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Employee_to_OE_OE`|(`OE`)|`Organizational_Entitiy` (`id`)| NO ACTION|NO ACTION|
| `Employee`| (`Employee`)|`Bank_Employee` (`id`)| NO ACTION|NO ACTION|
| `EmployeetoOEType`|(`Relationship_Type`)|`Employee_To_OE_Type` (`id`)| NO ACTION|NO ACTION|
|For Table:` Electronic_Address_Type`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`OE_idx`|`Employee_To_OE`|(`OE` ASC)|VISIBLE|.|
|`Employee_idx`|`Employee_To_OE`|(`Employee` ASC)| VISIBLE|.|
|`Type_idx`|`Employee_To_OE`|(`Relationship_Type` ASC)|VISIBLE|.|
