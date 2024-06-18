-- Selects the product_id, first year of sale, quantity, and price for the first year of each product
SELECT 
    -- Selects the product_id from the Sales table
    Sales.product_id, 
    -- Renames the year column to first_year for clarity in the output
    Sales.year AS first_year, 
    -- Selects the quantity of the product sold
    Sales.quantity, 
    -- Selects the price of the product
    Sales.price
-- Specifies the Sales table as the source of the data
FROM 
    Sales
-- Joins the Sales table with a subquery that finds the minimum year (first year) of sale for each product
INNER JOIN 
    -- Subquery to find the first year of sale for each product
    (SELECT 
        -- Selects the product_id
        product_id, 
        -- Finds the minimum year for each product_id, which is the first year of sale
        MIN(year) AS min_year 
    FROM 
        -- Specifies the Sales table as the source for the subquery
        Sales 
    -- Groups the results by product_id to apply the MIN function to each group
    GROUP BY 
        product_id) AS first_year_sales
-- Specifies the join condition
ON 
    -- Joins on product_id
    Sales.product_id = first_year_sales.product_id 
    -- Joins on year where it matches the first year of sale (min_year)
    AND Sales.year = first_year_sales.min_year;
