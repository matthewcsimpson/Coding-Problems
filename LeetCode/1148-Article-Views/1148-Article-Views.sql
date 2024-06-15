SELECT DISTINCT author_id AS id
FROM views
where author_id=viewer_id
ORDER BY author_id asc;