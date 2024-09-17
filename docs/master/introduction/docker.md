# Docker

[[toc]]

## Introduction

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using the Docker Compose tool.

With the help of Docker Compose, you can define containers to be built, their configuration, links, volumes, ports, etc., in a single file, and it gets launched by a single command. You can also add multiple servers and services just by adding them to the Docker Compose configuration file. This configuration file is in [YAML](https://en.wikipedia.org/wiki/YAML) format.

#### Application Data and Database Volume Persistence

It is recommended to keep your application files and database data volume on the Docker host and mount them on the running container. This ensures that the application and database data persistence even in the case of containers' failure or termination. In this way, even if you destroy containers, your data won't get lost unless you remove them forcefully.
This compose configuration file mounts the application directory **`app`** and database volume **`dbvolume`** from the host to running Docker containers at the time of containers' launch.

## Installation & Setup

### First steps

Before you can launch Bagisto in a Docker environment, you need to install the latest versions of Docker and Docker Compose.

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Composer](https://getcomposer.org) (optional)

### Configure the Docker container

Once Docker and Docker Compose are installed, you need to create a **`docker-compose.yml`** file. The **`docker-compose.yml`** configuration file requires the following inputs from the user:

#### Webserver configuration

In the **`web_server`** service block, assign your system's working user UID to the **`USER_UID`** environment variable. To find your user ID, run the following command on Linux or macOS:
```shell
id -u
```

#### Database configuration

In the **`database_server`** service block, assign the MySQL database name, MySQL database user name, MySQL database user password, and MySQL root password to the **`MYSQL_DATABASE`**, **`MYSQL_USER`**, **`MYSQL_PASSWORD`**, and **`MYSQL_ROOT_PASSWORD`** environment variables, respectively.

#### Clone configuration from GitHub

You can make use of our repository from GitHub by cloning it into your new directory:
```shell
git clone https://github.com/bagisto/bagisto-docker.git .
```

#### Manual configuration

Alternatively, you can create a new folder, for example, **`bagisto-docker`**, and manually create the **`docker-compose.yml`** file inside it. Add the following content to **`docker-compose.yml`**:

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
  **
```

#### Downloading the Docker Image

To download the Docker images for Apache-PHP version 7.3 and MySQL version 5.7, execute the following command:

```shell
docker-compose pull
```

### Launching the Docker Container

Execute the following command to create a network and launch web server and database containers with the names **`apache2`** and **`mysql`** respectively. It will also create new directories **`app`** and **`dbvolume`** within your current directory and mount them to the respective Docker containers as specified in the **`docker-compose.yml`** file. Additionally, it binds your **`host port 80`** to the Apache2 container's port 80, and your **`host port 3306`** to the MySQL container's port 3306. If you wish to use different ports for the containers, modify their values in the **`docker-compose.yml`** file.

```
docker-compose up -d
```

### Monitoring Your Container(s)

To check the running Docker containers, use the following commands:

**`docker ps`** OR **`docker-compose ps`**
```shell
CONTAINER ID   IMAGE                      COMMAND                  CREATED             STATUS             PORTS                               NAMES
62a10346b84a   webkul/apache-php:latest   "/usr/bin/supervisord"   About an hour ago   Up About an hour   0.0.0.0:80->80/tcp                  apache2
90a0a2e0e46b   mysql:5.7                  "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
```

## Configuring Bagisto

After setting up your environment, you can proceed with the installation of Bagisto. There are two ways to install Bagisto: either from [Github](#install-without-composer) or using [composer](#install-with-composer).

### Install without Composer

To install Bagisto without using composer, follow these steps:
1. Download the [latest release](https://bagisto.com/en/download) and save it in the **`app/bagisto`** directory.
2. Open the **`.env`** file located inside the **app/bagisto** directory.
3. Set the following environment variables as shown below:

```editorconfig
APP_URL=https://127.0.0.1
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
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

Mention the database details same as docker-compose.yml and admin details.


### Install with composer

The following commands will be executed within the docker container
```shell
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'composer create-project bagisto/bagisto'"
```

Open the .env file inside **`app/bagisto`** directory and set the following environment variables listed below:

```editorconfig
APP_URL=https://127.0.0.1
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

To install Bagisto, execute the following commands:

```shell
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'"
docker exec -i apache2 bash -c "su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'"
```

Bagisto has been successfully installed and is now ready to use. To access it, open your web browser and enter your server's IP address or domain name.

### Configuring Apache

By default, the Apache document root is set to **/var/www/html/public_html**. Additionally, the **app** directory on your host machine is mapped to the **html** directory inside the container. To ensure proper configuration, we need to create a symlink of **`bagisto/public`** in the **`app`** directory that points to **`/var/www/html/public_html`**.

To create the symlink, follow the steps below:

On Linux or macOS, run the following command:
```bash
cd app; ln -snf bagisto/public public_html
```

On Windows, run the following command:
```command-line
cd app
mklink bagisto/public public_html
```

### Ready to Use

#### Admin Login:

You can access the admin interface by visiting [http://your_server_endpoint/admin](http://your_server_endpoint/admin/) and logging in with the following credentials:

| Email                | Password |
|----------------------|----------|
| admin@example.com    | admin123 |

#### Customer Login:

To access your store, visit [http://your_server_endpoint/](http://your_server_endpoint/).