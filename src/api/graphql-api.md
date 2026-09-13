# GraphQL API

Bagisto's GraphQL API delivers a modern, flexible approach to e-commerce data access. Built on Laravel Lighthouse, it provides efficient querying capabilities perfect for headless commerce, mobile apps, and modern frontend frameworks.

## 🚀 Quick Start

### Live Demo

Experience the power of GraphQL with our interactive demo:

🌐 [**GraphQL API Demo**](https://demo.bagisto.com/mobikul-common/graphiql) - Test queries and explore the schema in real-time

::: tip Interactive Playground
The demo includes GraphiQL playground where you can write queries, explore documentation, and see real-time results.
:::

## 📦 Installation

### Step 1: Install the Package

Install the GraphQL API package via Composer, choosing the release that matches your Bagisto version (the package README lists the pairs):

```bash
composer require bagisto/graphql-api
```

### Step 2: Configure Middleware

Update your `bootstrap/app.php` file to ensure proper session handling. Bagisto 2.4 and 2.5 both use the Laravel 11+ application bootstrap, so the snippet is the same on either:

```php
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

::: warning Important Configuration
Moving the session middleware from the `web` group to the global stack is what lets the `/graphql` endpoint, which is not a web route, keep a guest cart between requests. Logged-in customers and admins authenticate with a JWT bearer token instead.
:::

### Step 3: Environment Configuration

Add the following JWT settings to your `.env` file:

```properties
# JWT Configuration for GraphQL API
JWT_TTL=525600
JWT_SHOW_BLACKLIST_EXCEPTION=true

# API Key for mobile/frontend authentication
MOBIKUL_API_KEY=your-secure-api-key-here
```

`JWT_TTL` is the token lifetime in minutes (the value above is one year). `MOBIKUL_API_KEY` is a shared secret the package checks on requests from the Mobikul mobile apps; generate a strong random value, keep it out of version control, and rotate it if it leaks.

### Step 4: Install and Publish Assets

Run the installation command to set up configurations:

```bash
php artisan bagisto-graphql:install
```

This command will:
- Publish GraphQL schema files
- Set up authentication routes
- Configure GraphiQL playground

## 🔧 Testing Your Setup

### GraphiQL Playground

Access the interactive GraphQL playground:

```text
http://your-domain.com/graphiql
```

### Direct API Endpoint

For programmatic access or tools like Postman:

```text
http://your-domain.com/graphql
```

## 🔗 Next Steps

Ready to build with GraphQL? Here are your next steps:

- 🎮 [**Try the Live Demo**](https://demo.bagisto.com/mobikul-common/graphiql)

::: tip Need Traditional REST?
If you prefer traditional REST endpoints, check out our [REST API](./rest-api) documentation.
:::
