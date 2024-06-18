# 1070. Product Sales Analysis III

**Difficulty:** Medium

### Tables

#### Sales

| Column Name | Type |
|-------------|------|
| sale_id     | int  |
| product_id  | int  |
| year        | int  |
| quantity    | int  |
| price       | int  |

**Primary Key:** `(sale_id, year)`  
**Foreign Key:** `product_id` references `Product(product_id)`  
**Description:** Each row represents a sale of a product in a given year. Note that the price is per unit.

#### Product

| Column Name  | Type    |
|--------------|---------|
| product_id   | int     |
| product_name | varchar |

**Primary Key:** `product_id`  
**Description:** Each row represents a product with its name.

### Objective

Write a SQL query to select the product id, year, quantity, and price for the first year of every product sold. The resulting table can be returned in any order.

### Example

**Input:**

_Sales table:_

| sale_id | product_id | year | quantity | price |
|---------|------------|------|----------|-------|
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |

_Product table:_

| product_id | product_name |
|------------|--------------|
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |

**Output:**

| product_id | first_year | quantity | price |
|------------|------------|----------|-------|
| 100        | 2008       | 10       | 5000  |
| 200        | 2011       | 15       | 9000  |
