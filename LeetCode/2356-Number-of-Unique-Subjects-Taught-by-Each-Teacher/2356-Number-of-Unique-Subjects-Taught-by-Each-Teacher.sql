-- Selecting columns for the output
SELECT
    teacher_id,  -- Selects the ID of the teacher
    COUNT(DISTINCT subject_id) AS cnt  -- Counts the unique subjects taught by each teacher and labels it as 'cnt'
FROM
    Teacher  -- Specifies the table 'Teacher' from which to retrieve the data
GROUP BY 
    teacher_id;  -- Groups the results by teacher_id to ensure the count is calculated per teacher
