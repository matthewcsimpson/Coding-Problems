SELECT tweet_id 
FROM Tweets
WHERE length(content) > 15
ORDER BY tweet_id asc;