My own project

# mysql container

docker run -p 3306:3306 --name database-mysql -e MYSQL_ROOT_PASSWORD=envelio123 -d mysql:latest

# connect to mysql service

## enter container

docker compose exec database mysql -u root -p

## show databases

SHOW DATABASES;

## create database called app

CREATE DATABASE app;

## use the database

USE app;

## fill database with data from sql file

source application/setup.sql

## show tables

SHOW TABLES;

# express build

docker build -t express .

# express container

docker run -p 3000:3000 express
