# Bagisto APIs

[[toc]]

## GraphQL API

Bagisto GraphQL API is a medium to use the features of the core Bagisto System. By using Bagisto GraphQL API, you can integrate your application to serve the default content of Bagisto.

## Explore GraphQL API Demo

Welcome to our API demo! Dive into the interactive showcase of our API functionalities to get a hands-on experience of how our platform works. Click the Link below to access the demo:

[Access GraphQL API Demo](https://demo.bagisto.com/mobikul-common/)

#### Installation of GraphQL API

To Install Bagisto GraphQL API, you need to follow some steps.

- To install Bagisto GraphQL API from your console:

~~~
composer require bagisto/graphql-api ^v2.2.2
~~~

- In the ```app/Http/Kernel.php``` file, move the following middleware from the web section in the ```middlewareGroups``` array to the global middleware array:

~~~
\Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
\Illuminate\Session\Middleware\StartSession::class,
~~~

- Add the following entries to your .env file to configure JWT settings.

~~~
JWT_TTL=525600
JWT_SHOW_BLACKLIST_EXCEPTION=true
~~~

- Run the command below to publish assets and configurations for Bagisto GraphQL:

~~~
php artisan bagisto-graphql:install
~~~

- After installation, you can test your API through the GraphQL Playground. Visit:

~~~
http://your-domain.com/graphiql
~~~

- Alternatively, you can test the API using Postman by accessing:

~~~
http://your-domain.com/graphql
~~~

You can check the <a href="https://github.com/bagisto/headless-ecommerce/tree/v2.2.2"> headless-ecommerce </a> github as well.
