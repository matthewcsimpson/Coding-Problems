-- Select the query_name and calculate the quality and poor_query_percentage for each query
SELECT
    -- Select the name of the query
    query_name,  
    -- Calculate the average quality of the query by dividing rating by position, then round to 2 decimal places
    ROUND(
        AVG(rating / position),
     2) AS quality, 
    -- Calculate the percentage of poor queries (rating < 3), then round to 2 decimal places
    ROUND(
        AVG(
            IF(rating < 3, 1, 0)
            ) 
        * 100
    , 2) AS poor_query_percentage 
FROM
    Queries  -- From the Queries table
WHERE
    query_name IS NOT NULL  -- Only include rows where query_name is not null
GROUP BY 
    query_name;  -- Group the results by query_name
