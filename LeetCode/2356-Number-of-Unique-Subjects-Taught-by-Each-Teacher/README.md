# 2356. Number of Unique Subjects Taught by Each Teacher

**Table: Teacher**

| Column Name | Type |
|-------------|------|
| teacher_id  | int  |
| subject_id  | int  |
| dept_id     | int  |

The combination of `(subject_id, dept_id)` is the primary key of this table, representing unique values. Each row signifies that the teacher identified by `teacher_id` teaches the subject `subject_id` in the department `dept_id`.

**Objective:**  
Develop a solution to calculate the number of unique subjects each teacher teaches at the university.

**Results:**  
The result table can be returned in any order.

**Example 1:**

*Input:*  
Teacher table:

| teacher_id | subject_id | dept_id |
|------------|------------|---------|
| 1          | 2          | 3       |
| 1          | 2          | 4       |
| 1          | 3          | 3       |
| 2          | 1          | 1       |
| 2          | 2          | 1       |
| 2          | 3          | 1       |
| 2          | 4          | 1       |

*Output:*  

| teacher_id | cnt |
|------------|-----|
| 1          | 2   |
| 2          | 4   |

*Explanation:*  
- **Teacher 1:**
  - Teaches subject 2 in departments 3 and 4.
  - Teaches subject 3 in department 3.
- **Teacher 2:**
  - Teaches subject 1 in department 1.
  - Teaches subject 2 in department 1.
  - Teaches subject 3 in department 1.
  - Teaches subject 4 in department 1.
