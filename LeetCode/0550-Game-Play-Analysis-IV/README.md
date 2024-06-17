# 550. Game Play Analysis IV

**Table: Activity**

| Column Name  | Type |
|--------------|------|
| player_id    | int  |
| device_id    | int  |
| event_date   | date |
| games_played | int  |

**Primary Key:** (player_id, event_date)

**Description:**
This table records the activity of players in various games. Each row logs a player's session where they logged in, played a number of games (possibly 0), and then logged out using a specific device on a given day.

**Objective:**
Develop a query to calculate the fraction of players who logged in again the day immediately following their first login day, with the result rounded to two decimal places. Essentially, count the players who logged in for at least two consecutive days starting from their first login, and then divide this number by the total number of players.

**Result Format Example:**

**Input:**
Activity table:
| player_id | device_id | event_date | games_played |
|-----------|-----------|------------|--------------|
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-03-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |

**Output:**
| fraction  |
|-----------|
| 0.33      |

**Explanation:**
- Only player 1 logged back in the day after their first login, resulting in a fraction of 1/3 = 0.33.

