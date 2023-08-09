DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employees (
  emp_id INT NOT NULL
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  job_title VARCHAR(50) NOT NULL,
  manager_name VARCHAR(50),
  dept_name VARCHAR(50),
  salary INT NOT NULL,
  PRIMARY KEY (id)
)
 
CREATE TABLE departmentInfo (
  dept_id INT NOT NULL,
  dept_name VARCHAR(50)
)
CREATE TABLE roles(
  role_id INT NOT NULL,
  job_title VARCHAR(50),
  manager_name VARCHAR(50),
  salary INT NOT NULL,
  dept_name VARCHAR(50)
)

