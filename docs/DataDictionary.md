---
id: Dictionary
title: Data Dictionary
---

## Data Dictionary- Table (Entity) Address
		


		| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
		|---|---|---|---|---|
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		| Address|`id` |BIGINT(12)| PK, NN|.|
		| Address|`Primary`| TINYINT |NULL|.|
		| Address|`po_box`| VARCHAR(45)| NULL|.|
		| Address|`Addressline 1` |VARCHAR(45)| NULL|.|
		| Address|`Addressline 2` |VARCHAR(45)| NULL|.|
		| Address|`Street_Number`| INT| NULL|.|
		| Address|`zip_code`| VARCHAR(45)| NULL|.|
		| Address|`City` |BIGINT(12) |NULL|.|
		| Address|`Country`| BIGINT(12)| NULL|.|
		| Address|`Region` |BIGINT(12)| NULL|.|
		| Address|`Latitude`| DECIMAL| NULL|.|
		| Address|`Longitude`| DECIMAL |NULL|.|
		| Address|`Person` |BIGINT(12)| NULL|.|
		| Address|`Address_Type`| BIGINT(12)| NULL|.|
		|For Table: ADDRESS:|
		|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
		|`Person_PII`|('Person')|`Person_PII` (`id`)|NO ACTION| NO ACTION|
		|`Address_type`|('Address_type`)| `Address_Type` (`Id`)|NO ACTION| NO ACTION|
		|`Country`|(`Country`)|`Country` (`id`)|NO ACTION| NO ACTION|
		|`City`|(`City`)|`City` (`id`)|NO ACTION| NO ACTION|
		|`Region`|(`Region`)|`Region` (`id`)|NO ACTION| NO ACTION|
		|For Table: ADDRESS:|
		|CREATE INDEX|ON|ASC|VISABLE|.|
		|`Person_idx`|`Address`|(`Person` ASC)|VISIBLE;|.|
		|`Address_type_idx`|`Address`|(`Address_Type` ASC)|VISIBLE;|.|
		|`Country_idx`|`Address` |(`Country` ASC)|VISIBLE;|.|
		|`City_idx`|`Address`|(`City` ASC)|VISIBLE;|.|
		|`Region_idx`|`Address`|(`Region` ASC)|VISIBLE;|.|
		
