-- Select the user_id and count of follower_id, and name the count as followers_count
SELECT 
    user_id,
    COUNT(follower_id) AS followers_count
-- Specify the table to select from
FROM 
    Followers
-- Group the results by user_id to aggregate the count of followers for each user
GROUP BY 
    user_id
-- Order the results by user_id in ascending order
ORDER BY 
    user_id ASC;
