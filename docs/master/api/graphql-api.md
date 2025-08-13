# Bagisto APIs

[[toc]]

## Introduction

Bagisto GraphQL API provides a way to interact with the core features of the Bagisto system. By using the Bagisto GraphQL API, you can seamlessly integrate your application and access the default functionality and content provided by Bagisto.

## Explore GraphQL API Demo

Welcome to our API demo! Dive into the interactive showcase of our API functionalities to get a hands-on experience of how our platform works. Click the Link below to access the demo:

[Server Demo](https://demo.bagisto.com/mobikul-common/)

[Access GraphQL API Demo](https://demo.bagisto.com/mobikul-common/graphiql)

#### Installation of GraphQL API

To Install Bagisto GraphQL API, you need to follow some steps.

- To install Bagisto GraphQL API from your console:

~~~
composer require bagisto/graphql-api dev-main
~~~

- Update Middleware Configuration

In your `bootstrap/app.php` file, add the following session middleware changes:

```
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;

return Application::configure(basePath: dirname(__DIR__))
   ->withMiddleware(function (Middleware $middleware) {
      // ... rest of middleware setup

      /**
       * Remove session and cookie middleware from the 'web' middleware group.
       */
      $middleware->removeFromGroup('web', [StartSession::class, AddQueuedCookiesToResponse::class]);

      /**
       * Adding session and cookie middleware globally to apply across non-web routes (e.g. GraphQL)
       */
      $middleware->append([StartSession::class, AddQueuedCookiesToResponse::class]);
   })
   // ... rest of configuration
```   

This ensures that session and cookie middleware are applied globally across all routes, including API and GraphQL endpoints.

- Update Environment Settings

Add the following entries to your `.env` file to configure JWT settings:

~~~
JWT_TTL=525600
JWT_SHOW_BLACKLIST_EXCEPTION=true
~~~

- Publish Assets and Configurations 

Run the command below to publish assets and configurations for Bagisto GraphQL:

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

::: tip Note
Some API endpoints require authorization via the `MOBIKUL_API_KEY`. This ensures only authenticated clients can access protected resources.
:::

- You can find the API key in your Laravel project’s `.env` file:

```
MOBIKUL_API_KEY=your-mobikul-api-key
```
Replace your-mobikul-api-key with the actual key provided for your environment.

Securely share the API key with your mobile or frontend development team so they can make authorized API requests.

That's it! Your Bagisto GraphQL API is now ready. Execute the project on your specified domain and start building your headless eCommerce solution.

You can check the <a href="https://github.com/bagisto/headless-ecommerce/tree/v2.3.0"> headless-ecommerce </a> github as well.
