SELECT 
    -- Select the employee_id column
    employee_id
FROM
    Employees
WHERE 
    -- Filter out employees whose manager_id is not in the list of employee_ids
    -- This subquery selects all employee_ids from the employees table
    manager_id NOT IN (
        SELECT 
            employee_id
        FROM 
            employees
    )
AND 
    -- Filter out employees with a salary less than 30000
    salary < 30000
ORDER BY 
    -- Sort the result by employee_id in ascending order
    employee_id;