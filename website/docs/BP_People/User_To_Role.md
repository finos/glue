---
id: User_To_Role
title: User To Role
hide_table_of_contents: true
---

## Data Dictionary - Entity Table: User_To_Role

Maps users to roles for security purposes

| Primary Key ('id')||ENGINE = InnoDB|||
|---|---|---|---|---|
|Column Name|Data Type|PK Primary Key, NN-Not Null, Null|Example|Comments|
||
|`id`|BIGINT(12)|PK, NN|1|PrimaryKey-ID,(auto creates)|
|`user_id`|BIGINT(12)|NOT NULL|4|user id from Table-User|
|`role_id`|BIGINT(12) |NOT NULL|8|Role id from Table-Role|
||
|CONSTRAINT|FOREIGN KEY|REFERENCES|ON DELETE|ON UPDATE|
|`user_id`|(`user_id`)|`User`(`id`)| NO ACTION|NO ACTION|
|`Role`|(`role_id`)|`Role`(`id`)| NO ACTION|NO ACTION|
||
|CREATE INDEX|ON|ASC|VISABLE||
|`user_id_idx`|`User_To_Role`|(`user_id` ASC) | VISIBLE||
|`Role_idx`|`User_To_Role`|(`role_id` ASC)  | VISIBLE||
||
