(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{791:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")]),a("ul",[a("li",[a("a",{attrs:{href:"#docker-setup-for-bagisto"}},[t._v("Docker Setup for Bagisto")])]),a("li",[a("a",{attrs:{href:"#_1-using-bagisto-docker-image-from-docker-hub"}},[t._v("1. Using Bagisto Docker Image from Docker Hub")])]),a("li",[a("a",{attrs:{href:"#_2-using-bagisto-github-docker-repository"}},[t._v("2. Using Bagisto GitHub Docker Repository")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1),t._v(" is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using the Docker Compose tool.")]),t._v(" "),a("p",[t._v("With the help of Docker Compose, you can define containers to be built, their configuration, links, volumes, ports, etc., in a single file, and it gets launched by a single command. You can also add multiple servers and services just by adding them to the Docker Compose configuration file. This configuration file is in "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML"),a("OutboundLink")],1),t._v(" format.")]),t._v(" "),a("h4",{attrs:{id:"application-data-and-database-volume-persistence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-data-and-database-volume-persistence"}},[t._v("#")]),t._v(" Application Data and Database Volume Persistence")]),t._v(" "),a("p",[t._v("It is recommended to keep your application files and database data volume on the Docker host and mount them on the running container. This ensures that the application and database data persistence even in the case of containers' failure or termination. In this way, even if you destroy containers, your data won't get lost unless you remove them forcefully.\nThis compose configuration file mounts the application directory "),a("strong",[a("code",[t._v("app")])]),t._v(" and database volume "),a("strong",[a("code",[t._v("dbvolume")])]),t._v(" from the host to running Docker containers at the time of containers' launch.")]),t._v(" "),a("h3",{attrs:{id:"docker-setup-for-bagisto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-setup-for-bagisto"}},[t._v("#")]),t._v(" Docker Setup for Bagisto")]),t._v(" "),a("p",[t._v("You can configure Bagisto using Docker in two different ways:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Using Bagisto Docker Image from Docker Hub")])]),t._v(" "),a("li",[a("strong",[t._v("Using Bagisto GitHub Docker Repository")])])]),t._v(" "),a("p",[t._v("Both approaches allow you to set up the application quickly, managing all system requirements like Apache, MySQL, and PHPMyAdmin within isolated containers. Below is a detailed guide for each method.")]),t._v(" "),a("h3",{attrs:{id:"_1-using-bagisto-docker-image-from-docker-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-bagisto-docker-image-from-docker-hub"}},[t._v("#")]),t._v(" 1. "),a("strong",[t._v("Using Bagisto Docker Image from Docker Hub")])]),t._v(" "),a("p",[t._v("Follow the steps below to set up Bagisto using Docker Hub. This approach provides a pre-configured Docker image of Bagisto, allowing for a quick and easy installation.")]),t._v(" "),a("h4",{attrs:{id:"step-1-pull-bagisto-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-pull-bagisto-docker-image"}},[t._v("#")]),t._v(" Step 1: Pull Bagisto Docker Image")]),t._v(" "),a("p",[t._v("To pull the Bagisto Docker image from Docker Hub, use the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull webkul/bagisto:2.2.2\n")])])]),a("h4",{attrs:{id:"step-2-run-a-new-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-run-a-new-container"}},[t._v("#")]),t._v(" Step 2: Run a New Container")]),t._v(" "),a("p",[t._v("Once the image is pulled, you can run a new Docker container using the command below. This will bind your local port 80 to the container’s port 80, so Bagisto can be accessed via the browser.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 webkul/bagisto:2.2.2\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v("\nIf port 80 is already in use, you can try using a different port. For example, you can map port 8082 on your local machine to port 80 in the container by running the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8082")]),t._v(":80 webkul/bagisto:2.2.2\n")])])]),a("p",[t._v("After this, you can access the application at "),a("code",[t._v("http://localhost:8082/")]),t._v(" instead of "),a("code",[t._v("http://localhost:80")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"step-3-access-bagisto-in-your-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-access-bagisto-in-your-browser"}},[t._v("#")]),t._v(" Step 3: Access Bagisto in Your Browser")]),t._v(" "),a("p",[t._v("After the container is up and running, open your browser and navigate to "),a("code",[t._v("http://localhost")]),t._v(". This will load the Bagisto setup.")]),t._v(" "),a("h4",{attrs:{id:"step-4-admin-login-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-admin-login-credentials"}},[t._v("#")]),t._v(" Step 4: Admin Login Credentials")]),t._v(" "),a("p",[t._v("Use the following credentials to log in to the Bagisto admin panel:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Admin Username")]),t._v(": "),a("code",[t._v("admin@example.com")])]),t._v(" "),a("li",[a("strong",[t._v("Admin Password")]),t._v(": "),a("code",[t._v("admin123")])])]),t._v(" "),a("h3",{attrs:{id:"_2-using-bagisto-github-docker-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-using-bagisto-github-docker-repository"}},[t._v("#")]),t._v(" 2. "),a("strong",[t._v("Using Bagisto GitHub Docker Repository")])]),t._v(" "),a("h4",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[t._v("#")]),t._v(" System Requirements")]),t._v(" "),a("p",[t._v("The Bagisto GitHub Docker repository automatically handles the system requirements for running Bagisto, including the necessary Apache and MySQL configurations. Before proceeding, ensure that you have the latest version of "),a("strong",[t._v("Docker")]),t._v(" and "),a("strong",[t._v("Docker Compose")]),t._v(" installed. You can find installation instructions for your operating system at the following links:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Installation Guide"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose Installation Guide"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"docker-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-configuration"}},[t._v("#")]),t._v(" Docker Configuration")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("Adjust Ports and Paths")]),a("br"),t._v("\nOpen the "),a("code",[t._v("docker-compose.yml")]),t._v(" file and configure the ports for Apache, MySQL, and PHPMyAdmin. You can also specify the volumes and MySQL credentials. Here's an example configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bagisto-php-apache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_project_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/www/html/\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add your UID")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $USER\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dockerfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./Dockerfile\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bagisto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("80:80")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adjust Apache port")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./workspace/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html/\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bagisto-mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plugin=mysql_native_password\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adjust MySQL port")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./.configs/mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/mysql/\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bagisto-phpmyadmin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" phpmyadmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PMA_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bagisto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mysql\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PMA_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PMA_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adjust PHPMyAdmin port")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Running the Setup")]),a("br"),t._v("\nAfter adjusting the configurations, execute the following command to start the Docker containers:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" setup.sh\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"accessing-bagisto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-bagisto"}},[t._v("#")]),t._v(" Accessing Bagisto")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Admin Panel")]),a("br"),t._v("\nAccess the admin panel at:"),a("br"),t._v(" "),a("code",[t._v("http(s)://your_server_endpoint/admin/login")]),a("br"),t._v("\nUse the default credentials:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Email")]),t._v(": "),a("code",[t._v("admin@example.com")])]),t._v(" "),a("li",[a("strong",[t._v("Password")]),t._v(": "),a("code",[t._v("admin123")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Customer Registration")]),a("br"),t._v("\nRegister and log in as a customer at:"),a("br"),t._v(" "),a("code",[t._v("http(s)://your_server_endpoint/customer/register")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);