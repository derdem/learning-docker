CREATE DATABASE app;

USE app;

CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    role varchar(255),
    PRIMARY KEY (id)
);

INSERT INTO Users (email, password, first_name, last_name, role)
VALUES
    ('peterlustig@email.com', 'peterlustig', 'peter', 'lustig', 'admin'),
    ('peterpan@email.com', 'peterpan', 'peter', 'pan', 'regular');
