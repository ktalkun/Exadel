USE `plenta_db`;

CREATE TABLE `user`
(
    `id`   INTEGER     NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,
    CONSTRAINT USERS_ID_PK PRIMARY KEY (id)
);

CREATE TABLE `photo_post`
(
    `id`            INTEGER      NOT NULL AUTO_INCREMENT,
    `description`   VARCHAR(200) NOT NULL,
    `creation_date` DATETIME     NOT NULL,
    `photo_link`    TEXT         NOT NULL,
    `user_id`       INTEGER      NOT NULL,
    CONSTRAINT PHOTO_POST_ID_PK PRIMARY KEY (id),
    CONSTRAINT PHOTO_POST_USER_ID_FK
        FOREIGN KEY (user_id) REFERENCES user (id)
);