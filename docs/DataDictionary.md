

## Data Dictionary- Table: Address
Entity / Table :Address
This suite of data dictionaries is not limited to a specific data collection. The aim is to enable data developers to select appropriate data elements to use in meeting the needs of their data collection. 
These data dictionaries are:

Party identifier details data dictionary
Electronic contact details data dictionary
Organisation details data dictionary
Person details data dictionary

A table has been created to show the mapping between the data elements within the Address details data dictionary 
Here are the components for the following address items:

Primary address

Components of the primary address are:
(i) `Primary` - Address site (or Primary Complex) name.

(ii) `po_box` - PO Box number

(iii)`Addressline 1`- First Address line Name, number or number range

(iv) `Addressline 2`- Second Address line Name, number or number range

(v) `Street_Number`- Address Number

(vi) `zip_code` - Zip Code/ Post Code

(vii) `City` - City

(viii) `Country` - Country

(ix) `Region` -(if applicable)
(x) `Latitude` - Describes the Latitude coordinate that define the position of an address point, using the decimal degrees representation.
(xi)`Longitude`- Describes the Longitude coordinate that define the position of an address point, using the decimal degrees representation.
(xii)`Person`- Describes Company position/ title
(xiii)`Address_Type` - Home or Business
 
		

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
