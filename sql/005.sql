USE `plenta_db`;
SELECT user.id   AS id,
       user.name AS name
FROM `photo_post`
         JOIN `user`
              ON user.id = photo_post.user_id
GROUP BY photo_post.user_id
HAVING COUNT(photo_post.user_id) > 3