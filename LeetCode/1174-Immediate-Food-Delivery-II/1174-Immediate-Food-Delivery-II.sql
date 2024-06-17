-- Select the percentage of immediate deliveries rounded to 2 decimal places
SELECT
    ROUND(
        -- Calculate the average of orders delivered on the preferred delivery date and multiply by 100
        AVG(order_date = customer_pref_delivery_date) * 100, 
        2
    ) AS immediate_percentage
FROM 
    Delivery
WHERE
    -- Filter to include only the first order date for each customer
    (customer_id, order_date) IN (
        -- Select the customer_id and their earliest order date
        SELECT
            customer_id, 
            MIN(order_date)
        FROM 
            Delivery
        GROUP BY 
            customer_id
    );
