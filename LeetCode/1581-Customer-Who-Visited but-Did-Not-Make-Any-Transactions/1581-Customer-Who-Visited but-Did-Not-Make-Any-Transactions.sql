SELECT 
    customer_id as customer_id,
    COUNT(customer_id) as count_no_trans
FROM 
    Visits
LEFT JOIN 
    Transactions 
ON 
    Visits.visit_id=Transactions.visit_id
WHERE 
    Transactions.transaction_id IS NULL
GROUP BY 
    customer_id;