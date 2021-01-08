# Docker

[[toc]]

## Introduction
[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using Docker-Compose tool.

With the help of docker-compose, you can define containers to be build, their configuration, links, volumes, ports etc in a single file and it gets launched by a single command.
You can also add multiple servers and services just by adding them to docker-compose configuration file. This configuration file is in [YAML](https://en.wikipedia.org/wiki/YAML) format.

#### Application Data and Database Volume Persistance
It is recommended to keep your application files and database data volume on the docker host and mount them on the running container, this to ensure that the application and database data persistance even in the case of containers' failure or termination, In this way even if you destroy containers, your data won't get lost unless you remove them forcefully.
This compose configuration file mounts the application directory `app` and database volume `dbvolume` from host to running docker containers at the time of containers launch.

## Installation & Setup

### First steps
Before you can launch Bagisto in a docker environment you need to install the latest version of Docker and Docker Compose.  

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- [Composer](https://getcomposer.org) (optional)

### Configure the docker container
Once Docker and docker-compose have been installed, we need to create a **docker-compose.yml** file.  
The **docker-compose.yml** configuration file requires following inputs from the user:

#### Webserver configuration
In the `web_server` service block, assign your system working user uid to the `USER_UID` enviroment variable.  
Run the following command `id -u` on linux or Macos to get your user id
```shell
id -u
```

#### Database configuration
In the `database_server` service block, assign mysql database name, mysql database user name, mysql database user password and mysql root password to `MYSQL_DATABASE`, `MYSQL_USER`, `MYSQL_PASSWORD` and `MYSQL_ROOT_PASSWORD` environment.


#### Clone configuration from Github
You can make use of our repository from Github by cloning this in your new directory
```shell
git clone https://github.com/bagisto/bagisto-docker.git .
```
#### Configure manually
- Create a new folder for example **bagisto-docker** and create **docker-compose.yml** manually inside it.
- Add the following content to **docker-compose.yml**
```yml
version: '3'

services:

  web_server:
    image: webkul/apache-php:latest
    container_name: apache2
    restart: always
    volumes:
      - ./app:/var/www/html
    working_dir: /var/www/html/
    environment:
      USER_UID: 'mention your system user ID here. ex: 1001, 1000, 33, etc'
    networks:
      - bagisto-network
    ports:
      - '80:80'
    expose:
      - '80'
    depends_on:
      - database_server
    links:
      - database_server

  database_server:
    image: mysql:5.7
    container_name: mysql
    restart: always
    environment:
      MYSQL_DATABASE: 'mention the name of the database to be created here. eg: mydatabase'
      MYSQL_USER: 'mention database user here. eg: mydatabase_user'
      MYSQL_PASSWORD: 'mention database user password here. ex: mystrongPassword'
      MYSQL_ROOT_PASSWORD: 'mention mysql root password here. ex: mysqlstrongpass'
      MYSQL_ROOT_HOST: '%'
    networks:
      - bagisto-network
    ports:
      - '3306:3306'
    expose:
      - '3306'
    volumes:
      - ./dbvolume:/var/lib/mysql

volumes:
  dbvolume:
  app:

networks:
  bagisto-network:
  ```

#### Download the docker image
The following command will download the docker images for apache-php version 7.3 and mysql version 5.7.
```shell
docker-compose pull
```

### Launching the docker container
The following command will create a network, launch a webserver and database containers with names `apache2` and `mysql`.
It will also create a new `app` and `dbvolume` directory inside your current directory and mount it to respective docker containers as mentioned in docker-compose.yml. 
It binds your `host port 80` with the apache2 container port 80 and `host port 3306` with mysql container port 3306. If you want to run containers on ports other than 80 and 3306, modify their values in **docker-compose.yml** file. 

```
docker-compose up -d
```

### Monitor your container(s):
Check your running docker containers with the following commands

`docker ps` OR `docker-compose ps`
```shell
CONTAINER ID   IMAGE                      COMMAND                  CREATED             STATUS             PORTS                               NAMES
62a10346b84a   webkul/apache-php:latest   "/usr/bin/supervisord"   About an hour ago   Up About an hour   0.0.0.0:80->80/tcp                  apache2
90a0a2e0e46b   mysql:5.7                  "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
```

## Configuring Bagisto
Once our environment is ready we can start installing Bagisto. You can either install Bagisto from [Github](#install-without-composer) or with [composer](#install-with-composer)

### Install without composer 
Clone [bagisto](https://github.com/bagisto/bagisto) inside `app/public_html` directory and mention your system or system IP on browser and begin with installaton process. 
Mention the database details same as docker-compose.yml and admin details.

```shell
git clone https://github.com/bagisto/bagisto app/public_html
```

Run the following commands to install Bagisto.
```shell
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'" 
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'"
```

### Install with composer
The following commands will be exexcuted within the docker container
```shell
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'composer create-project bagisto/bagisto'"
```

Open the .env file inside `app/bagisto` directory and set the following environment variables listed below:

```editorconfig
APP_URL=
DB_CONNECTION=
DB_HOST=mysql
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Run the following commands to install Bagisto.
```shell
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'" 
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'"
```

Bagisto has been installed and is ready. Browse your server IP address or domain name on the web browser.

### Configure Apache
The Apache documentroot is by default assigned to **/var/www/html/public_html**. while the **app** directory on host is mapped with the **html** directory inside the container, we need to create a symlink of `bagisto/public` in `app` directory to `/var/www/html/public_html`.

Run the following command on Linux or MacOS 
```shell
cd app; ln -snf bagisto/public public_html
```

Run the following command on Windows
```command-line
cd app
mklink bagisto/public public_html
```
### Ready

#### Login as a administrator:
```
http(s)://your_server_endpoint/admin/login

email: admin@example.com
password: admin123
```

#### Login as a customer
You can directly visit your store on [http(s):/your_server_endpoint/](http(s):/your_server_endpoint/).
