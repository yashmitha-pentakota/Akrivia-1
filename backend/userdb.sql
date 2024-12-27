CREATE DATABASE userdb;
 
USE userdb;
 
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);
 
INSERT INTO users (username, password)
VALUES ('user1', '$2a$10$encryptedpasswordhash');