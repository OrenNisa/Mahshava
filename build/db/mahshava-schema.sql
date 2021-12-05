CREATE DATABASE IF NOT EXISTS mahshava;

DROP USER IF EXISTS 'mahshava_db_root'@'%';
-- password MD5('mahshava_db_root')
CREATE USER 'mahshava_db_root'@'%' IDENTIFIED WITH mysql_native_password BY 'd99579913a98ba9e20edb016c12ed10b';
GRANT ALL ON mahshava.* TO 'mahshava_db_root'@'%';
FLUSH PRIVILEGES;
