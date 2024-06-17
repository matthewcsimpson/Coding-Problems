SELECT 
    DATE_FORMAT(trans_date, '%Y-%m') AS month,  -- Format the transaction date to 'YYYY-MM' to represent the month
    country as country,  -- Select the country of the transaction
    COUNT(id) AS trans_count,  -- Count the total number of transactions per country per month
    SUM(
        CASE WHEN state = 'approved'  -- Calculate the number of approved transactions
        THEN 1 
        ELSE 0 END) AS approved_count,
    SUM(amount) AS trans_total_amount,  -- Sum the total amount of transactions per country per month
    SUM(
        CASE WHEN state = 'approved'  -- Sum the total amount of approved transactions
        THEN amount 
        ELSE 0 END) AS approved_total_amount
FROM 
    transactions
GROUP BY 
    month, country  -- Group the results by month and country
