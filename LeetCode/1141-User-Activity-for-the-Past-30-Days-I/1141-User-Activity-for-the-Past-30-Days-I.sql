-- Selects the activity_date column and renames it to 'day'
SELECT
    activity_date AS day,
-- Counts the distinct user_id values for each day and renames the count to 'active_users'
    COUNT(DISTINCT user_id) AS active_users
-- Specifies the table 'Activity' from which to retrieve the data
FROM 
    Activity
-- Filters the rows to include only those where activity_date is within the last 30 days ending on 2019-07-27
WHERE 
    activity_date BETWEEN DATE('2019-07-27') - INTERVAL 29 DAY AND DATE('2019-07-27')
-- Groups the results by 'day' to ensure the count is calculated per day
GROUP BY 
    day;
