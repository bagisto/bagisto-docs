# Bagisto APIs

[[toc]]

## REST API

Bagisto REST API is a medium to use the features of the core Bagisto System. By using Bagisto REST API, you can integrate your application to serve the default content of Bagisto.

## Explore REST API Demo

Welcome to our API demo! Dive into the interactive showcase of our API functionalities to get a hands-on experience of how our platform works. Click the Link below to access the demo:

[Access REST API Demo](https://demo.bagisto.com/bagisto-api-demo/)

#### Installation of REST API

To install Bagisto REST API, you need to follow some steps.

- To install Bagisto REST API from your console:

~~~
composer require bagisto/rest-api dev-master
~~~

- Add below options in the .env file (i.e. http://localhost/public your domain):

~~~
SANCTUM_STATEFUL_DOMAINS=http://localhost/public
~~~

- To configure the REST API L5-Swagger Documentation run below command:

~~~
php artisan bagisto-rest-api:install
~~~

- To check the Admin end API documentation:

~~~
http://localhost/public/api/admin/documentation
~~~

- To check the Shop end API documentation:

~~~
http://localhost/public/api/shop/documentation
~~~

* You can check the <a href="https://github.com/DarkaOnLine/L5-Swagger"> L5-Swagger </a> guidelines too regarding the configuration the API documentation.
