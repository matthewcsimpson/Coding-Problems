-- Selects the class column from the Courses table
SELECT
    class
-- Specifies the table 'Courses' from which to retrieve the data
FROM 
    Courses
-- Groups the results by class to ensure the count is calculated per class
GROUP BY 
    class
-- Filters the groups to include only those with 5 or more students
HAVING
    count(student) >= 5;