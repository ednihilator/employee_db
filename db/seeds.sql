USE employee_db;

INSERT INTO department (name)
VALUES ("accounting"),
("marketing"),
("human resources"), 
("sales"),
("management");

INSERT INTO role (title, salary, dept_id)
VALUES ("accountant", 80000, 1),
("marketing guy", 70000,2),
("HR rep", 65000, 3),
("sales person", 75000,4),
("general manager", 85000,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ted", "Smith", 5, NULL),
("Fred", "Johnson", 2, 1 ),
("Ed", "Sample1", 3, 1),
("Ned", "Sample2", 4, 1),
("Zed", "Sample3", 1, 1);



