INSERT INTO employees (emp_id, first_name, last_name, job_title, salary, manager_name, dept_name)
VALUES (1,"Ted", "Smith", "accountant", 80, "Michael Scott", "accounting"),
(2,"Fred", "Johnson", "head marketing guy", 75, "Michael Scott", "marketing"),
(3,"Ed"),
(4,"Ned"),
(5,"Zed");

INSERT INTO departmentInfo (dept_id, dept_name)
VALUES (1, "accounting"),
(2, "marketing"),
(3, "human resources"), 
(4, "sales"),
(5,"general manager")

INSERT INTO roles (role_id, job_title, manager_name, salary, dept_name)