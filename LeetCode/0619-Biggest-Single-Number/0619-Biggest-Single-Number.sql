-- Since the requirements state that if there is no single biggest number the output should be null, 
-- we can use a subquery to find the largest single number and then return it. If the subquery is empty, 
-- the outer query will return NULL.
SELECT
    (
        -- Subquery to find the largest single number
        SELECT
            num  -- Selects the number from MyNumbers table
        FROM
            MyNumbers  -- Specifies the table to select from
        GROUP BY
            num  -- Groups the results by number
        HAVING
            COUNT(num) = 1  -- Filters to include only numbers that appear once
        ORDER BY
            num DESC  -- Orders the single numbers in descending order
        LIMIT
            1  -- Limits the result to the largest single number
    ) AS num  -- Names the result column as num
