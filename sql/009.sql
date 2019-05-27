USE `plenta_db`;
SELECT user.id as id,
       user.name AS name,
       DATE (photo_post.creation_date) as time,
       photo_post.description as description
FROM `photo_post`
         JOIN `user` ON user.id = photo_post.user_id
WHERE LENGTH(photo_post.description) > 100;