CREATE DATABASE IF NOT EXISTS MediaDatabase;

USE MediaDatabase;

CREATE TABLE IF NOT EXISTS Users (
                                     userID INT AUTO_INCREMENT PRIMARY KEY,
                                     username VARCHAR(255) NOT NULL UNIQUE,
                                     password VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS UserDetails (
                                           userDetailsID INT AUTO_INCREMENT PRIMARY KEY,
                                           userID INT,
                                           gender ENUM('Male', 'Female', 'Other') NOT NULL,
                                           email VARCHAR(255) NOT NULL UNIQUE,
                                           age INT,
                                           FOREIGN KEY (userID) REFERENCES Users(userID)
);
