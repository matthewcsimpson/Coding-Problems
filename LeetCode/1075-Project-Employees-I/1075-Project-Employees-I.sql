SELECT 
    Project.project_id,  -- Selects the project ID from the Project table
    ROUND(  -- Rounds the result to 2 decimal places
        AVG(  -- Calculates the average of the experience years of employees
            Employee.experience_years
        ),
        2
    ) as average_years  -- Alias the result as average_years
FROM
    Project  -- Specifies the Project table as the source of project_id
JOIN 
    Employee  -- Joins the Project table with the Employee table
ON 
    Employee.employee_id = Project.employee_id  -- Specifies the join condition on employee_id
GROUP BY 
    Project.project_id  -- Groups the results by project_id to calculate averages per project
