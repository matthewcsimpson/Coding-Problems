-- Select the employee_id and name of the managers
-- Count the number of employees reporting to each manager and calculate the average age of these employees
SELECT
    Managers.employee_id,
    Managers.name,
    COUNT(Employees.employee_id) AS reports_count,
    ROUND(AVG(Employees.age)) AS average_age
-- Specify the Employees table as the source of data
FROM 
    Employees AS Employees
-- Join the Employees table with itself to get the managers
JOIN 
    Employees AS Managers
-- Define the condition for the join, where employees report to managers
ON 
    Employees.reports_to = Managers.employee_id
-- Group the results by manager's employee_id to aggregate the data
GROUP BY 
    Managers.employee_id
-- Order the results by manager's employee_id
ORDER BY 
    Managers.employee_id;
