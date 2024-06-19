-- Select columns employee_id and department_id
SELECT 
    employee_id, 
    department_id
-- From the Employee table
FROM 
    Employee
-- Filter the results where primary_flag is 'Y' or the employee_id is in a specific subset
WHERE 
    primary_flag = 'Y' 
    -- The subset includes employee_ids that appear exactly once in the Employee table
    OR employee_id IN (
        -- Select employee_id from Employee table
        SELECT 
            employee_id
        -- Group the results by employee_id
        FROM 
            Employee
        GROUP BY 
            employee_id
        -- Having a count of exactly one implies the employee is in only one department
        HAVING 
            COUNT(employee_id) = 1
    );
