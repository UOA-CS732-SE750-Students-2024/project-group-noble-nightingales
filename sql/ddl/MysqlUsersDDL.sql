CREATE DATABASE IF NOT EXISTS MediaDatabase;

USE MediaDatabase;

CREATE TABLE IF NOT EXISTS Users (
                                     userID INT AUTO_INCREMENT PRIMARY KEY,
                                     username VARCHAR(255) NOT NULL UNIQUE,
                                     password VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS UserDetails (
    userDetailsID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    gender VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT,
    isSubscribed BOOLEAN,
    mbti CHAR(4),
    CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES Users(userID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
