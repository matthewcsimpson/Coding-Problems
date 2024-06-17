-- Select the contest_id and the percentage of users who attended each contest
SELECT 
    Register.contest_id AS contest_id,  -- Select contest_id from Register table
    ROUND(
        COUNT(
            DISTINCT 
            Register.user_id  -- Count distinct user_ids for each contest
        ) / 
        (
            SELECT 
                COUNT(
                    DISTINCT Users.user_id  -- Count distinct user_id from Users table
                )
            FROM 
                Users  -- From Users table
        ) * 100,  -- Calculate the percentage of users who attended the contest
        2  -- Round the percentage to 2 decimal places
    ) AS percentage  -- Alias the result as percentage
FROM 
    Register  -- From Register table
GROUP BY
    contest_id  -- Group by contest_id to calculate the percentage for each contest
ORDER BY
    percentage DESC,  -- Order the results by percentage in descending order
    contest_id;  -- In case of a tie, order by contest_id in ascending order
