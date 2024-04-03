INSERT INTO Users (username, password) VALUES
                                           ('alice.smith', 'hashed_password_for_alice'),
                                           ('bob.johnson', 'hashed_password_for_bob'),
                                           ('charlie.davis', 'hashed_password_for_charlie');


INSERT INTO UserDetails (userID, gender, email, age) VALUES
                                                         (1, 'Female', 'alice.smith@example.com', 29),
                                                         (2, 'Male', 'bob.johnson@example.com', 35),
                                                         (3, 'Other', 'charlie.davis@example.com', 24);
