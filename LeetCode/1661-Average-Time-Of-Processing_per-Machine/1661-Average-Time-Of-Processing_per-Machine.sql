SELECT 
    aStart.machine_id, 
    -- ROUND() rounds the average processing time to 3 decimal places.
    ROUND(
        -- AVG() calculates the average processing time for each machine.
        AVG(aEnd.timestamp-aStart.timestamp),
    3) as processing_time
FROM 
    Activity as aStart,
    Activity as aEnd
WHERE 
    aStart.activity_type="start"
AND 
    aEnd.activity_type="end"
AND 
    aStart.process_id = aEnd.process_id
AND 
    aStart.machine_id = aEnd.machine_id
GROUP BY 
    aStart.machine_id;