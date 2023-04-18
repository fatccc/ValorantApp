CREATE USER `valorant`@`%` IDENTIFIED WITH caching_sha2_password BY 'xxx';

GRANT Alter, Alter Routine, Create, Create Routine, Create Temporary Tables, Create View, Delete, Drop, Event, Execute, Grant Option, Index, Insert, Lock Tables, References, Select, Show View, Trigger, Update ON `valorant\_dev`.* TO `valorant`@`%`;


CREATE DATABASE `valorant_dev` DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

### 详细表结构及数据查看 /exe/mysql-8.0.28-winx64/valorant_dev.sql
