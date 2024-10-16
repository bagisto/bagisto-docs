# Docker

[[toc]]

## Introduction

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using the Docker Compose tool.

With the help of Docker Compose, you can define containers to be built, their configuration, links, volumes, ports, etc., in a single file, and it gets launched by a single command. You can also add multiple servers and services just by adding them to the Docker Compose configuration file. This configuration file is in [YAML](https://en.wikipedia.org/wiki/YAML) format.

#### Application Data and Database Volume Persistence

It is recommended to keep your application files and database data volume on the Docker host and mount them on the running container. This ensures that the application and database data persistence even in the case of containers' failure or termination. In this way, even if you destroy containers, your data won't get lost unless you remove them forcefully.
This compose configuration file mounts the application directory **`app`** and database volume **`dbvolume`** from the host to running Docker containers at the time of containers' launch.

### Docker Setup for Bagisto

You can configure Bagisto using Docker in two different ways:

**Using Bagisto Docker Image from Docker Hub**

Both approaches allow you to set up the application quickly, managing all system requirements like Apache, MySQL, and PHPMyAdmin within isolated containers. Below is a detailed guide for each method.

### **Using Bagisto Docker Image from Docker Hub**

Follow the steps below to set up Bagisto using Docker Hub. This approach provides a pre-configured Docker image of Bagisto, allowing for a quick and easy installation.

#### Step 1: Pull Bagisto Docker Image

To pull the Bagisto Docker image from Docker Hub, use the following command:

```bash
docker pull webkul/bagisto:1.3.2
```

#### Step 2: Run a New Container

Once the image is pulled, you can run a new Docker container using the command below. This will bind your local port 80 to the container’s port 80, so Bagisto can be accessed via the browser.

```bash
docker run -it -d -p 80:80 webkul/bagisto:1.3.2
```

#### Step 3: Access Bagisto in Your Browser

After the container is up and running, open your browser and navigate to `http://localhost`. This will load the Bagisto setup.

#### Step 4: Admin Login Credentials

Use the following credentials to log in to the Bagisto admin panel:

- **Admin Username**: `admin@example.com`
- **Admin Password**: `admin123`
