USE `plenta_db`;
SELECT DATEDIFF(NOW(), DATE(`creation_date`)) AS difference
FROM `photo_post`
ORDER BY `creation_date`
LIMIT 1;