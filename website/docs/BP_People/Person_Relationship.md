---
id: Person_Relationship
title: Person Relationship
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: Person_Relationship

Person relations are bi-directional: e.g. “is owner” and “has owner”, “has parent” and “has child”.

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID (auto creates)'Maps the person to person relationship'|
|`Person`|BIGINT(12)|NOT NULL|132|'ID of person'|
|`Associated_Person`|BIGINT(12)|NOT NULL|12|'ID of associated person'|
|`Relation_Type`|BIGINT(12)|NOT NULL|2|ID of relation type-  see Table Person Relation_Type|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`relation_type_id`|(`Relation_Type`)|`Person_Relation_Type` (`id`)| NO ACTION|NO ACTION|
|`Person`|(`Person`)|`Person` (`id`)| NO ACTION|NO ACTION|
|`Associated_Person`|(`Associated_Person`)|`Person` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`relation_type_id_idx`|`Person_Relationship`|(`Relation_Type` ASC) | VISIBLE||
|`Person_idx`|`Person_Relationship`|(`Person` ASC) | VISIBLE||
|`Associated_Person_idx`|`Person_Relationship`|(`Associated_Person` ASC) | VISIBLE||
||
