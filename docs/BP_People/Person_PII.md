---
id: Person_PII

title: Person_PII
---

## Data Dictionary - Entity Table: Person_PII

Enter the PII - Personally identifiable information
Table with person's PII. 

It could be as private person as well as organization name. Personally identifiable information (PII) is information that,

when used alone or with other relevant data, can identify an individual. 


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID, Not Null (auto creates)|
|`Person`|BIGINT(12)|NULL|1|.|
|`First_Name`|VARCHAR(45)|NULL|Jane|First Name upto 45 characters|
|`Middle_Name`|VARCHAR(45)|NULL|Ann|Middle Name upto 45 characters|
|`Last_Name`|VARCHAR(45)|NULL|Doe|Last Name upto 45 characters|
|`Birth_Date`|DATE|NULL|15Jan91|Birthdate|
|`Title`|BIGINT(12)|NULL|3|Title id of person. see Table-Title|
|`Language`|BIGINT(12)|NULL|4|Language id used for communication. see Table-Language|
|`Organization_Name`|VARCHAR(45)|NULL|ABC Bank|Name of the organization|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`Title`|(`Title`)|`Title` (`id`)| NO ACTION|NO ACTION|
|`Language`|(`Language`)|`Language` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Title_idx`|`Person_PII`|(`Title` ASC) | VISIBLE|.|
|`Language_idx`|`Person_PII`|(`Language` ASC) | VISIBLE|.|
||  
 
