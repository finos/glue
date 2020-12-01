---
id: User

title: User
---

## Data Dictionary - Entity Table: User


| Primary Key ('id')|.|ENGINE = InnoDB|.|.|
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`Person` |BIGINT(12)|NOT NULL|3|enter the person id|
|`username`|VARCHAR(32) |NOT NULL|uname@glue.com|Enter the user's username|
|`hash`|VARCHAR(254)|NOT NULL |$e0801$38ixhj+Fyo2XqicjuxJPW|Hashed password|
|`account_non_expired`|TINYINT(1)|NOT NULL|0|Determines whether account is expired or not|
|`account_non_locked`|TINYINT(1)|NOT NULL|0|Determines whether account is locked or not|
|`credentials_non_expired`|TINYINT(1)|NOT NULL |0|Determines whether credentials are expired or not|
|`enabled`|TINYINT(1)|NOT NULL|0|User is enabled or not|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`UserPerson`|(`Person`)|`Person` (`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE|.|
|`Person_idx`|`User`|(`Person` ASC)| VISIBLE|.|
||
