---
id: Dictionary
title: Data Dictionary
---

## Data Dictionary
		
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |


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
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|Address_Type	|`Id` |	BIGINT(12)	|PK, NN|.|

		|Address_Type|`Name` |	VARCHAR(45)|	Null|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|`Asset_Classification_Node`|`id` |BIGINT(12)|PK, NN|.|
		|`Asset_Classification_Node`|`Node_Name`| VARCHAR(45) |NULL|.|
		|`Asset_Classification_Node`|`Regime` |BIGINT(12)| NULL|.|
		|`Asset_Classification_Node`|`Asset_Classification_Regime_Structurecol`| BIGINT(12)| NULL|.|
		|`Asset_Classification_Node`|`Benchmark`| BIGINT(12)| NULL|.|
		|For Table: `Asset_Classification_Node`|
		|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
		|`Regime`|(`Regime`)|`Asset_Classification_Regime` (`id`)|NO ACTION| NO ACTION|
		|`NodeBenchmark`|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|
		|For Table: `Asset_Classification_Node`|
		|CREATE INDEX|ON|ASC|VISABLE|.|
		|`Regime_idx`|`Asset_Classification_Node`|(`Regime` ASC)|VISIBLE;|.|
		|`Benchmark_idx`|`Asset_Classification_Node`|(`Benchmark` ASC)| VISIBLE;|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|`Asset_Classification_Regime`|`id` |BIGINT(12)|PK, NN|.|
		|`Asset_Classification_Regime`|`Name`| VARCHAR(45)| NULL|.|
		|`Asset_Classification_Regime`|`Owner`| BIGINT(12)| NULL|.|
		|`Asset_Classification_Regime`|`Depth`|INT| NULL|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|`Asset_Classification_Structure`|`id`| BIGINT(12)|PK, NN|.|
		|`Asset_Classification_Structure`|`Parent`| BIGINT(12)| NULL|.|
		|`Asset_Classification_Structure` |`Child` |BIGINT(12)| NULL|.|
		|`Asset_Classification_Structure` |`Level`| INT| NULL|.|
		|For Table:`Asset_Classification_Structure`|
		|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
		|`ACParent`|(`Parent`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
		|`ACChild`|(`Child`)|`Asset_Classification_Node` (`id`)|NO ACTION| NO ACTION|
		|For Table:`Asset_Classification_Structure`|
		|CREATE INDEX|ON|ASC|VISABLE|.|
		|`Node_idx`|`Asset_Classification_Structure`|(`Parent` ASC)|VISIBLE;|.|
		|`Child_idx`|`Asset_Classification_Structure`|(`Child` ASC)|VISIBLE;|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|`BP-Relationship_Type`|`id`| BIGINT(12)|PK, NN|.|
		|`BP-Relationship_Type`|`Name`|BIGINT(12)|NULL|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|`Bank_Employee`|`id`| BIGINT(12)|PK, NN|.|
		|`Bank_Employee`|`Job_Function`| BIGINT(12)| NULL|.|
		|`Bank_Employee`|`Rank` |BIGINT(12)| NULL|.|
		|`Bank_Employee`|`Person`| BIGINT(12)| NULL|.|
		|For Table:`Bank_Employee`|
		|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
		|`BEPerson`|(`Person`)|`Person` (`id`)|NO ACTION| NO ACTION|
		|For Table:`Bank_Employee`|
		|CREATE INDEX|ON|ASC|VISABLE|.|
		|`Person_idx`|`Bank_Employee`|(`Person` ASC)|VISIBLE;|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		||
		|`Benchmark`|`id` |BIGINT(12) |PK,NN|.|
		|`Benchmark`|`Name` |VARCHAR(45)| NULL|.|
		|`Benchmark`| `Is_Composit`| TINYINT |NULL|.|
		||
		|Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		|`Benchmark_Constituent`|`id`| BIGINT(12)| NPK, NN|.|
		|`Benchmark_Constituent`| `Instrument`| BIGINT(12)| NULL|.|
		|`Benchmark_Constituent`| `Weight`| DECIMAL |NULL|.|
		|`Benchmark_Constituent`|`Benchmark`| BIGINT(12)| NULL|.|
		|For Table:`Benchmark_Constituent`|
		|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
		|`ConstituentBenchmark`|(`Benchmark`)|`Benchmark` (`id`)|NO ACTION| NO ACTION|
		|For Table:`Benchmark_Constituent`|
		|CREATE INDEX|ON|ASC|VISABLE|.|
|`Benchmark_idx`|`Benchmark_Constituent`|(`Benchmark` ASC)| VISIBLE;|.|
		 ||
		 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
		 ||
|`Book`|`id`|BIGINT(12)| PK, NN|.|
|`Book`|`Name`| VARCHAR(45)| NULL|.|
|`Book`|`OE’| BIGINT(12)| NULL|.|
|For Table:`Book’|	  
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`OE`|(`OE`)|`Organizational_Entitiy` (`id`)| NO ACTION| NO ACTION|
| For Table:`Book’|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`OE_idx`|`Book`| (`OE` ASC)| VISIBLE;|.|
 ||
 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
    ||
|`Business_Partner`|`id`| BIGINT(12)|PK,NN|.|
|`Business_Partner`|`Internal_ID`| VARCHAR(45)| NULL|.|
|`Business_Partner|`Nickname`| VARCHAR(45)| NULL|.|
|`Business_Partner|`Currency`| BIGINT(12)| NULL|.|	
|`Business_Partner|`Business_Partner_Type` |BIGINT(12)|NULL|.|	
| For Table:`Business_Partner’|	
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
| `BPType| (`Business_Partner_Type`)| `Business_Partner_Type` (`id`)| NO ACTION| NO ACTION|
| For Table:`Business_Partner’|
| CREATE INDEX|ON|ASC|VISABLE|.|
| `Type_idx`| `Business_Partner`| (`Business_Partner_Type` ASC)| VISIBLE;|.|	  
||
 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
||
|`Business_Partner_Structure`|`id`| BIGINT(12) |PK, NN|.|
|`Business_Partner_Structure`|`Parent`| BIGINT(12)| NULL|.|
|`Business_Partner_Structure`|`Child`| BIGINT(12)| NULL|.|
|`Business_Partner_Structure`|`Level`| BIGINT(12)| NULL|.|
|`Business_Partner_Structure`|`Relationship_Type`| BIGINT(12) |NULL|.|	  
|For Table: `Business_Partner_Structure`|	  
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
| `ParentBP`| (`Parent`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
| `ChildBP`| (`Child`)| `Business_Partner` (`id`)| NO ACTION| NO ACTION|
| `Relationship_Type`| (`Relationship_Type`)| `BP-Relationship_Type` (`id`)| NO ACTION| NO ACTION|
|For Table: `Business_Partner_Structure|	  
   | CREATE INDEX|ON|ASC|VISABLE|.|
  | `Parent_idx`| `Business_Partner_Structure`| (`Parent` ASC)| VISIBLE;|.|
   |`Child_idx` |`Business_Partner_Structure`| (`Child` ASC)| VISIBLE;|.|
   |`Relationship_Type_idx` |`Business_Partner_Structure`| (`Relationship_Type` ASC) VISIBLE;|.|
||
 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
    ||
  |`Business_Partner_To_Person`|`id`| BIGINT(12)|PK, NN|.|
  |`Business_Partner_To_Person`|`Business_Partner`| BIGINT(12)| NULL|.|
|`Business_Partner_To_Person`|Person| BIGINT(12) |NULL|.|
|`Business_Partner_To_Person`| `Relationship_Type`| BIGINT(12)| NULL |.|	  
|For Table: ` Business_Partner_To_Person`|
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Business_Partner`|(`Business_Partner`)|`Business_Partner` (`id`)| NO ACTION| NO ACTION|
|`BP_P_Relationship_Type`|(`Relationship_Type`)|`Business_Partner_To_Person_Relationship_Type` (`id`)| NO ACTION| NO ACTION|
	         | `BP_P_Person`| (`Person`)| `Person` (`id`)| NO ACTION| NO ACTION|
        |For Table: ` Business_Partner_To_Person`|
        | CREATE INDEX|ON|ASC|VISABLE|.|
        | `Business_Partner_idx`| `Business_Partner_To_Person`| (`Business_Partner` ASC)| VISIBLE;|.|
     | `Relationship_Type_idx`| `Business_Partner_To_Person`| (`Relationship_Type` ASC)| VISIBLE;|.|
         | `Person_idx`|`Business_Partner_To_Person`| (`Person` ASC)| VISIBLE|.|
   ||
    |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
        ||
    |`Business_Partner_To_Person_Relationship_Type`|`id` |BIGINT(12) |PK, NN|.|
    |`Business_Partner_To_Person_Relationship_Type`|`Name`|VARCHAR(45)| NULL|.|
   ||
    |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
        ||
   |`Business_Partner_Type`|`id` |BIGINT(12)| PK, NN|.|
   |`Business_Partner_Type`|`Name`|VARCHAR(45)| NULL|.|
 ||
  |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
    ||
|`CMA_Set`|`id`| BIGINT(12)|PK, NN |.|
|`CMA_Set`|` Name` |VARCHAR(45)| NULL|.|
|`CMA_Set`|` Owner`| BIGINT(12)| NULL|.|	  
|`CMA_Set`|`Asset_Classification_Regime`|BIGINT(12)| NULL|.|
|`CMA_Set`|`Type`| ENUM("Szenario", "CMA")| NULL|.|
|`CMA_Set`|` Description`| TINYBLOB| NULL|.|
|For Table:`CMA_Set`|
|CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Asset_Classification_Regime`|(`Asset_Classification_Regime`)|`Asset_Classification_Regime` (`id`)| NO ACTION| NO ACTION|
|For Table:`CMA_Set`|
| CREATE INDEX|ON|ASC|VISABLE|.|
|`Asset_Classification_Regime_idx`|`CMA_Set`| (`Asset_Classification_Regime` ASC)| VISIBLE|.|
||
 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`CMA_Set_Hierachy`|`id`|BIGINT(12)| PK, NN|.|
|`CMA_Set_Hierachy`|`Parent`| BIGINT(12) |NULL|.|
|`CMA_Set_Hierachy`|`Child`| BIGINT(12) |NULL|.|	  
|For Table:`CMA_Set_Hierachy`|
| CONSTRAINT|FOREIGN KEY|REFERENCES |ON DELETE|ON UPDATE|
|`Parent`|(`Parent`)|`CMA_Set` (`id`)| NO ACTION| NO ACTION|
| `Child`|( `Child`)| `CMA_Set` (`id`)| NO ACTION| NO ACTION|
 |For Table:`CMA_Set_Hierachy`|
 |CREATE INDEX|ON|ASC|VISABLE|.|
|`Parent_idx`|`CMA_Set_Hierachy`|(`Parent` ASC)|VISIBLE|.|
|`Child_idx`|`CMA_Set_Hierachy`|(`Child` ASC)|VISIBLE|.|
||
 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Citizenship`|`id`| BIGINT(12)|PK, NN|.|
|`Citizenship`|`Name`| VARCHAR(45)|NULL|.|
|`Citizenship`|`Person`| BIGINT(12)|NULL|.|
|`Citizenship`|`Type`|BIGINT(12)|NULL|.|	  
|For Table:` Citizenship`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`CitizenshipPerson`|(`Person`)|`Person_PII` (`id`)|NO ACTION| NO ACTION|
| `CitizenshipType`|(`Type`)| `Citizenship_Type` (`id`)|NO ACTION| NO ACTION|
|For Table:` Citizenship`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Citizenship`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Citizenship`|(`Type` ASC)|VISIBLE|.| 
||
 |Table Name | Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  || 
|`Citizenship_Type`|`id`| BIGINT(12)|PK, NN|.|
|`Citizenship_Type`|`Name`| VARCHAR(45)|NULL|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
   |`City`|`id`| BIGINT(12)|PK, NN|.|
 |`City`|`Name`| VARCHAR(45)|NULL|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  || 
|`Country`|`id`| BIGINT(12)|PK, NN|.|
|`Country`|`Name`| VARCHAR(45)|NULL|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Credit_Limit`|`id`|BIGINT(12)|PK, NN|COMMENT 'Contains the credit limit objects'|
|`Credit_Limit`|`credit_limit_identier_id`| BIGINT(12)| NULL |COMMENT 'ID of credit limit identifier'|
|`Credit_Limit`|`portfolio_id`|BIGINT(12)| NULL |COMMENT 'ID of the portfolio'|
|`Credit_Limit`|`granted_limit`|DECIMAL(25,9)|NULL|COMMENT 'Maximum lending limit of the portfolio\n'|
|`Credit_Limit`|`lending_value`|DECIMAL(25,9)|NULL|COMMENT 'Maximum aggregated lending value of the portfolio\n'|
|For Table: `Credit_Limit`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`portfolio_id`|(`portfolio_id`)|`Portfolio` (`id`)|NO ACTION|NO ACTION|
|For Table: `Credit_Limit`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`portfolio_id_idx`|`Credit_Limit`|(`portfolio_id` ASC)| VISIBLE;|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Currency`|`id`|BIGINT(12)|PK, NN|AUTO_INCREMENT COMMENT 'Contains the external identifier of currency objects'|
|`Currency`|`Name`|VARCHAR(45)|NULL|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Currency_Identifier`|`id`|BIGINT(12)|PK, NN|COMMENT 'Contains the external identifier of credit limits'|
|`Currency_Identifier`|`currency_id`|BIGINT(12)|NN|.|
|`Currency_Identifier`|`currency_identifier_type_id`|BIGINT(12)|NN|.|
|For Table: `Currency_Identifier`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Identifier_Currency`|(`currency_id`)|`Currency` (`id`)|NO ACTION|NO ACTION|
|`currency_identifier_type_id`|(`currency_identifier_type_id`)|`Currency_Identifier_Type` (`id`)|NO ACTION|NO ACTION|
|For Table: `Currency_Identifier`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`currency_id_idx`|`Currency_Identifier`|(`currency_id` ASC)|VISIBLE|.|
|`currency_identifier_type_id_idx`|`Currency_Identifier`|(`currency_identifier_type_id` ASC)|VISIBLE|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Currency_Identifier_Type`|`id`|BIGINT(12)|PK, NN|COMMENT 'Contains the country identifier types'|
|`Currency_Identifier_Type`|`Identifier`|VARCHAR(6)|NULL|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Electronic_Address`|`id`|BIGINT(12)|PK, NN|.|
|`Electronic_Address`|`Address`|VARCHAR(45)|NULL|.|
|`Electronic_Address`|`Type`|BIGINT(12)|NULL|.|
|`Electronic_Address`|`Name`|VARCHAR(45)|NULL|.|
|`Electronic_Address`|`Person`|BIGINT(12)|NULL|.|
|For Table:`Electronic_Address`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`EA_Person_PII`|(`Person`)|`Person_PII` (`id`)|NO ACTION|NO ACTION|
| `EAType`|(`Type`)| `Electronic_Address_Type` (`id`)| NO ACTION|NO ACTION|
|For Table:`Electronic_Address`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`Electronic_Address`|(`Person` ASC)|VISIBLE|.|
|`Type_idx`|`Electronic_Address`|(`Type` ASC)|VISIBLE|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
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
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
|`Employee_To_OE_Type`|`id`|BIGINT(12)|PK, NN|.|
|`Employee_To_OE_Type`|`Name`|VARCHAR(45)|NULL|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||
 |`Fill`|`id`|BIGINT(12)|PK, NN|.|
|`Fill`|`Date_Time`|DATETIME|NULL|.|
|`Fill`|`ExternalID`|VARCHAR(45)|NULL|.|
|`Fill`|`SequenceNumber`|BIGINT(6)|NULL|.|
|`Fill`|`Quantity`|DECIMAL|NULL|.|
|`Fill`|`Price`|DECIMAL|NULL|.|
|`Fill`|`Currency`|BIGINT(12)|NULL|.|
   |`Fill`|`Comission`|DECIMAL|NULL|.|
   |`Fill`|`Comission_Currency`|BIGINT(12)|NULL|.|
  |`Fill`|`Fee`|DECIMAL|NULL|.|
  |`Fill`|`Fee_Currency`|BIGINT(12)|NULL|.|
 |`Fill`|`Order`|BIGINT(12)|NULL|.|
  |`Fill`|`Side`|VARCHAR(4)|NULL|.|
 |For Table:` Fill`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Order`|(`Order`)|`Order` (`id`)| NO ACTION|NO ACTION|
|`Comission_Currency`|(`Comission_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
|`FillCurrency`|(`Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
| `Fee_Currency`|( `Fee_Currency`)|`Currency` (`id`)| NO ACTION|NO ACTION|
       |For Table:` Fill`|
       |CREATE INDEX|ON|ASC|VISABLE|.|
       |`Order_idx`|`Fill`|(`Order` ASC)|VISIBLE|.|
       | `Comission_Currency_idx`|`Fill`| (`Comission_Currency` ASC)| VISIBLE|.|
      |`Currency_idx`|`Fill`|(`Currency` ASC)|VISIBLE|.|
   |`Fee_Currency_idx`|`Fill`|(`Fee_Currency` ASC)|VISIBLE|.|
||
 |Table Name|Column Name| Data Type|PK Primary Key, NN-Not Null, Null|.|
  ||

