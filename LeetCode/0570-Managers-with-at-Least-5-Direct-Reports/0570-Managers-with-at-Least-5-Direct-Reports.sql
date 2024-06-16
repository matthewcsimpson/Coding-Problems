SELECT
    TeamLead.name
FROM (
    -- This subquery counts the number of reports for each manager
    SELECT
        Managers.name as name,
        COUNT(Reports.managerID) as count
    FROM
        Employee as Managers
    JOIN 
        Employee as Reports
    ON
        Managers.id = Reports.ManagerID
    GROUP BY 
        Managers.id
) as TeamLead
WHERE 
    TeamLead.count >= 5;
    

