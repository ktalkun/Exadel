USE `plenta_db`;
SELECT user.name AS name,
       TIME (photo_post.creation_date) as time,
       photo_post.description as description
FROM `photo_post`
         JOIN `user` ON user.id = photo_post.user_id
ORDER BY photo_post.creation_date DESC;