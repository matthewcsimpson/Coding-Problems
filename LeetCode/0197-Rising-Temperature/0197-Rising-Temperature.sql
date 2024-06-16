SELECT 
    wCurrent.id
FROM 
    -- 
    Weather as wCurrent, 
    Weather as wPrevious
WHERE 
    -- DATEDIFF finds the difference in days between two dates.  
    -- If the difference is 1, then the two dates are consecutive.
    DATEDIFF(wCurrent.recordDate, wPrevious.recordDate) = 1
AND
    wCurrent.temperature > wPrevious.temperature;