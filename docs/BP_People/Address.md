---
id: Address
title: Address
---

## Data Dictionary- Table: Address

Address is attached to a person (private persons, Business Partners and organizations). Multiple addresses allowed.

Only one Primary Address, which will be used to drive regulatory checks, used for tax purposes, etc. 

The table contains two fields: longitude and latitude. They can be left "blank" or used to confirm a login of a user on a smartphone.

Also, credentials themselves can not guarantee that some PII is used within specific country jurisdiction. 

For example; A client advisor may be on business trip in the country where PII should not be available but, 
longitude and latitude will help to cope with this case. 
This table should belong to the list of tables that contain personally identifiable information.

| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
| Column Name| Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id` |BIGINT(12)| PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Primary`| TINYINT |NULL|1|Address site (or Primary Complex) name|
|`po_box`| VARCHAR(45)| NULL|P.O. Box 123|PO Box number|
|`Addressline 1` |VARCHAR(45)| NULL|Corp Building|First Address line Name, number or number range|
|`Addressline 2` |VARCHAR(45)| NULL|Main St|Second Address line Name, number or number range|
|`Street_Number`| INT| NULL|123|Address Number|
|`zip_code`| VARCHAR(45)| NULL|GU51 1AA|Zip Code or Post Code|
|`City` |BIGINT(12) |NULL|Guildford|City Name|
|`Country`| BIGINT(12)| NULL|UK|Country Name|
|`Region` |BIGINT(12)| NULL|Herts|Region,County,Provence if Applicable|
|`Latitude`| DECIMAL| NULL|55.7348|Latitude coordinate, define position of address point. use decimal degrees. Can be used for PII data. For APP user Logins, enables geolocator on smartphone to determine coordinates. e.g.If in EU then only data on EU citizens available|
|`Longitude`| DECIMAL |NULL|9.1225|Longitude coordinate (as above)|
|`Person` |BIGINT(12)| NULL|18009|Person id that uniquely identifies person (private person or organisation)|
|`Address_Type`| BIGINT(12)| NULL|2|Home, Business, etc|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Person_PII`|('Person')|`Person_PII` (`id`)|NO ACTION| NO ACTION|
|`Address_type`|('Address_type`)| `Address_Type` (`Id`)|NO ACTION| NO ACTION|
|`Country`|(`Country`)|`Country` (`id`)|NO ACTION| NO ACTION|
|`City`|(`City`)|`City` (`id`)|NO ACTION| NO ACTION|
|`Region`|(`Region`)|`Region` (`id`)|NO ACTION| NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Address`|(`Person` ASC)|VISIBLE|.|
|`Address_type_idx`|`Address`|(`Address_Type` ASC)|VISIBLE|.|
|`Country_idx`|`Address` |(`Country` ASC)|VISIBLE|.|
|`City_idx`|`Address`|(`City` ASC)|VISIBLE|.|
|`Region_idx`|`Address`|(`Region` ASC)|VISIBLE|.|
||
 
