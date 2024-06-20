-- Select distinct product IDs and their corresponding prices from a joined table
SELECT DISTINCT 
    recent_changes.product_id, 
    recent_prices.new_price AS price
-- Define a subquery recent_changes to find the most recent price change for each product before or on a given date
FROM 
    (
        -- Select product ID and the maximum change date for each product
        SELECT 
            product_id, 
            MAX(change_date) AS change_date
        -- From the Products table
        FROM 
            Products
        -- Where the change date is on or before August 16, 2019
        WHERE 
            change_date <= '2019-08-16'
        -- Group results by product ID to apply the MAX function to each group
        GROUP BY 
            product_id
    ) AS recent_changes 
-- Join the results with the Products table to get the price at the last change date
JOIN 
    Products AS recent_prices ON recent_changes.product_id = recent_prices.product_id AND recent_changes.change_date = recent_prices.change_date

-- UNION is used to combine the results of two SELECT statements into a single result set
UNION

-- Select product IDs and a default price for products that have no recorded price change before the given date
SELECT 
    product_id, 
    10 AS price
-- From the Products table
FROM 
    Products
-- Group by product ID to ensure unique product entries
GROUP BY 
    product_id
-- Filter to include only those products whose earliest price change is after August 16, 2019
HAVING 
    MIN(change_date) > '2019-08-16'
