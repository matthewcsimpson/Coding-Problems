SELECT
    Prices.product_id as product_id,
    -- if there is no units sold, return 0.00
    IFNULL(
        -- Round to 2 decimal places
        ROUND(
            -- Sum of the price times the units sold, divided by the number of units sold
            SUM(Prices.price * UnitsSold.units) / SUM(UnitsSold.units), 
        2), 
    0.00) as average_price
FROM
    Prices
-- Perform a LEFT JOIN with the UnitsSold table to include all products, even those without units sold
LEFT JOIN
    UnitsSold
ON 
    -- Join on product_id to match sales records with price records
    UnitsSold.product_id = Prices.product_id
AND
    -- Ensure the purchase date falls within the valid price date range
    (UnitsSold.purchase_date 
        BETWEEN 
            Prices.start_date 
        AND 
            Prices.end_date)
-- Group the results by product_id to prepare for aggregation (e.g., SUM, AVG)
GROUP BY 
    Prices.product_id;