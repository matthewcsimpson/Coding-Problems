SELECT 
   employee_id, 
   IF(
      employee_id % 2 != 0 
      AND name NOT LIKE 'm%', 
      salary, 
      0)
   AS bonus 
FROM   
   employees 
ORDER BY 
   employee_id; 