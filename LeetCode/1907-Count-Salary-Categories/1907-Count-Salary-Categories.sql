SELECT 
    SELECT 
        "Low Salary" AS category, -- Selects the category as "Low Salary"
        SUM(income < 20000) AS accounts_count -- Calculates the count of accounts with income less than 20000 and assigns it to accounts_count
    FROM 
        accounts -- Selects data from the 'accounts' table
    UNION 
    SELECT 
        "High Salary" as category, -- Selects the category as "High Salary"
        SUM(income > 50000) as accounts_count -- Calculates the count of accounts with income greater than 50000 and assigns it to accounts_count
    FROM 
        accounts -- Selects data from the 'accounts' table
    UNION 
    SELECT 
        "Average Salary" AS category, -- Selects the category as "Average Salary"
        SUM(income BETWEEN 20000 AND 50000) -- Calculates the count of accounts with income between 20000 and 50000 and assigns it to accounts_count
    FROM 
        accounts; -- Selects data from the 'accounts' table