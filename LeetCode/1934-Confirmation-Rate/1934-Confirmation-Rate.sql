SELECT
    Signups.user_id as user_id,
    IFNULL(
        ROUND(
            -- SUM() is used to count the number of confirmed actions
            SUM(Confirmations.action = "confirmed") / count(*),
        -- ROUND() is used to round the result to 2 decimal places
        2), 
    -- IFNULL() is used to replace NULL values with 0 so they can still be worked with/displayed
    0) as confirmation_rate
FROM
    Signups
LEFT JOIN 
    Confirmations
ON
    Confirmations.user_id = Signups.user_id
GROUP BY 
    Signups.user_id;
