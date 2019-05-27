USE `plenta_db`;
SELECT user.name AS name
FROM `photo_post`
         JOIN `user`
              ON user.id = photo_post.user_id
WHERE DATE(`creation_date`) = DATE(NOW())
GROUP BY user.name
HAVING COUNT(*) > 3;