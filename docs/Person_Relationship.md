---
id: Person_Relationship

title: Person_Relationship
---

## Data Dictionary - Entity Table: Person_Relationship

See Comments in table:

| Create Table if NOT EXISTS| Primary Key ('id')|.|ENGINE = InnoDB|.|
|---|---|---|---|---|
|Table Name |Column Name|Data Type|PK Primary Key, NN-Not Null, Null|COMMENT|
||
|`Person_Relationship`|`id`|BIGINT(12)|PK, NN|'Maps the person to person relationship'|
|`Person_Relationship`|`Person`|BIGINT(12)|NOT NULL|'ID of person'|
|`Person_Relationship`|`Associated_Person`|BIGINT(12)|NOT NULL|'ID of associated person'|
|`Person_Relationship`|`Relation_Type`|BIGINT(12)|NOT NULL|'ID of relation type'|
|For Table: `Person_Relationship`|
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`relation_type_id`|(`Relation_Type`)|`Person_Relation_Type` (`id`)| NO ACTION|NO ACTION|
|`Person`|(`Person`)|`Person` (`id`)| NO ACTION|NO ACTION|
|`Associated_Person`|(`Associated_Person`)|`Person` (`id`)| NO ACTION|NO ACTION|
|For Table: `Person_Relationship`|
|CREATE INDEX|ON|ASC|VISABLE|.|
|`relation_type_id_idx`|`Person_Relationship`|(`Relation_Type` ASC) | VISIBLE|.|
|`Person_idx`|`Person_Relationship`|(`Person` ASC) | VISIBLE|.|
|`Associated_Person_idx`|`Person_Relationship`|(`Associated_Person` ASC) | VISIBLE|.|
