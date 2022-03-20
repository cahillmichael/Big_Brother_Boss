INSERT INTO department (name)
VALUES 
    ('Animals'),
    ('Clowning'),
    ('Sideshow');

INSERT INTO positions (title, salary, department_id)
VALUES
    ('Lion Tamer', 5.00, 1),
    ('Seal Trainer', 4.50, 1),
    ('Whiteface', 3.25, 2),
    ('Auguste', 3.00, 2),
    ('Character', 3.50, 2),
    ('Clown Manager', 1.00, 2),
    ('Fire Breather', 4.00, 3),
    ('Sword Swallower', 4.75, 3),
    ('Sideshow Manager', 1.25, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
    (1, 'A', 'LiTam', 1, null),
    (2, 'B', 'SeTra', 2, null),
    (3, 'C', 'White', 3, 6),
    (4, 'D', 'Augus', 4, 6),
    (5, 'E', 'Chara', 5, null),
    (6, 'F', 'CloMa', 6, null),
    (7, 'G', 'FirBr', 7, 9),
    (8, 'H', 'SwoSw', 8, 9),
    (9, 'I', 'SidMa', 9, null);
