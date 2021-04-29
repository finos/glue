---
id: Address
title: Address
---

## Data Dictionary- Table: Address

Table contains address information for the Person entity (individuals and legal entities). 
One Person can hold multiple addresses. However, only one address can be marked as primary which will be used to drive regulatory checks, for tax purposes, etc.
Under certain jurisdictions, this table should belong to the list of tables that contains PII- Personally Identifiable Information.



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
|`City` |BIGINT(12) |NULL|20|City id from City Table|
|`Country`| BIGINT(12)| NULL|15|Country id from Country Table|
|`Region` |BIGINT(12)| NULL|1|Region Id from Region table|
|`Person` |BIGINT(12)| NULL|18009|Person id that uniquely identifies person (individual or organisation)|
|`Address_Type`| BIGINT(12)| NULL|2|Type of address from Address_Type Table: Home, Business, etc|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Person_PII`|(`Person`)|`Person_PII` (`id`)|NO ACTION| NO ACTION|
|`Address_type`|(`Address_type`)| `Address_Type` (`Id`)|NO ACTION| NO ACTION|
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
 

