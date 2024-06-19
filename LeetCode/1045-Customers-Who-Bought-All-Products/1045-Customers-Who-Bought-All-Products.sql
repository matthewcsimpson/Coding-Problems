-- Select the customer_id from the Customer table
SELECT
    customer_id
-- Specify the table from which to retrieve customer_ids
FROM
    Customer
-- Group the results by customer_id to prepare for the HAVING clause
GROUP BY 
    customer, id
-- Filter the groups to those where the count of distinct product_keys equals the total number of products
HAVING
    COUNT(DISTINCT product_key) = (
        -- Subquery to count the total number of distinct products in the Product table
        SELECT 
            COUNT(product_key) 
        FROM 
            Product
    );
