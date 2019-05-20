CREATE DATABASE IF NOT EXISTS `plenta_db` DEFAULT CHARACTER SET utf8;

GRANT SELECT,INSERT,UPDATE,DELETE
    ON `plenta_db`.*
    TO plenta_user@'%'
    IDENTIFIED BY 'plenta';