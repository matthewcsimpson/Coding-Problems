SELECT
    id,             -- Selects the 'id' column from the Cinema table
    movie,          -- Selects the 'movie' column from the Cinema table
    description,    -- Selects the 'description' column from the Cinema table
    rating          -- Selects the 'rating' column from the Cinema table
FROM 
    Cinema          -- Specifies the Cinema table as the source of the data
WHERE
    id % 2 != 0     -- Filters to include only rows where the 'id' is odd
AND 
    description != "boring"  -- Filters to exclude rows where the description is 'boring'
ORDER BY
    rating DESC;    -- Orders the results by the 'rating' column in descending order
