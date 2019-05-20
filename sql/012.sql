USE `plenta_db`;
SELECT user.id, user.name, SUM(MONTH(`creation_date`) = 5 AND DAY(`creation_date`) = 9) AS number
FROM `photo_post`
         JOIN `user`
              ON user.id = photo_post.user_id
GROUP BY photo_post.user_id;