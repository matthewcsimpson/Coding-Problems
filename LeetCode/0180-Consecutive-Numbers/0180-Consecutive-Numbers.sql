-- Select distinct numbers that appear consecutively at least three times
SELECT
    DISTINCT LogsOne.num as ConsecutiveNums
-- From the Logs table, alias as LogsOne
FROM
    Logs as LogsOne
-- Join Logs table aliased as LogsTwo where the id of LogsTwo is one less than LogsOne
JOIN Logs as LogsTwo 
    ON 
        LogsOne.id = LogsTwo.id -1
-- Join Logs table aliased as LogsThree where the id of LogsThree is two less than LogsOne
JOIN
    Logs as LogsThree
    ON LogsOne.id = LogsThree.id -2 
-- Filter the results to only include rows where the number in LogsOne, LogsTwo, and LogsThree are the same
WHERE 
    LogsOne.num = LogsTwo.num 
    AND 
    LogsTwo.num = LogsThree.num