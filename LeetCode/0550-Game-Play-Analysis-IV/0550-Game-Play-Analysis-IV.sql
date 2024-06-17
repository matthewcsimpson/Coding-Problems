-- Calculate the fraction of players who logged in the day after their first login
SELECT 
    -- Round the result to two decimal places
    ROUND(
        -- Count the distinct player_ids that logged in the day after their first login
        COUNT(DISTINCT player_id) / (
            -- Select the total count of distinct player_ids from Activity table
            SELECT COUNT(DISTINCT player_id) FROM Activity
        ),
        2
    ) AS fraction  -- Alias the result as 'fraction'
FROM 
    Activity
WHERE 
    -- Check if the player_id and the day before the event_date exist in the subquery result
    (player_id, DATE_SUB(event_date, INTERVAL 1 DAY)) IN (
        -- Subquery to find each player's first login date
        SELECT 
            player_id,
            MIN(event_date) AS first_login  -- Find the minimum event_date grouped by player_id
        FROM 
            Activity
        GROUP BY 
            player_id
    );