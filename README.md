# mysql container
docker run -p 3306:3306 --name database-mysql -e MYSQL_ROOT_PASSWORD=envelio123 -d  mysql:latest

# connect to mysql service
docker exec -it database-mysql mysql -u root -p

# express build
docker build -t express . 

# express container
docker run -p 3000:3000 express