CREATE DATABASE IF NOT EXISTS surveys;

DROP USER IF EXISTS 'surveys_db_root'@'%';
-- password MD5('surveys_db_root')
CREATE USER 'surveys_db_root'@'%' IDENTIFIED WITH mysql_native_password BY '593046ec62ac1a4aff6fb736759e1e3a';
GRANT ALL ON surveys.* TO 'surveys_db_root'@'%';
FLUSH PRIVILEGES;
