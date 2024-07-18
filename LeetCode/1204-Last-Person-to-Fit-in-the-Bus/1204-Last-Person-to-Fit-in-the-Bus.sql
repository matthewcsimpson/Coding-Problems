SELECT 
    -- Select the person_name column
    person_name 
    FROM 
        (
        -- Select all columns from the subquery
        SELECT
            *, 
            -- Calculate the running sum of the weight column
            sum(weight)
            OVER 
                (order by turn) as total
        FROM 
            queue
        ) Queue1
    -- Filter the results where the total weight is less than or equal to 1000
    WHERE 
        total <= 1000
    -- Sort the results in descending order based on the turn column
    ORDER BY 
        turn DESC
    -- Limit the result to only the first row
    LIMIT 1;