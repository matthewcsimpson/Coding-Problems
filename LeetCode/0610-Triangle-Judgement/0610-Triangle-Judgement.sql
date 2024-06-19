-- Select columns x, y, z and determine if they can form a triangle
SELECT 
    x, y, z,
    -- Use CASE statement to check the triangle inequality theorem
    CASE 
        -- If the sum of any two sides is greater than the third side, it forms a triangle
        WHEN x + y > z AND y + z > x AND z + x > y THEN 'Yes' 
        -- Otherwise, it does not form a triangle
        ELSE 'No' 
    END AS triangle
-- From the triangle table
FROM 
    triangle;