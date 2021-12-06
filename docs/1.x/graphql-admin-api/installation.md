
# Installation:

* Unzip the respective extension zip and then merge "packages" folder into project root directory.

### Goto config/app.php file and add following line under 'providers'

~~~
    Webkul\GraphQLAPI\Providers\GraphQLAPIServiceProvider::class
~~~

### Goto composer.json file and add following line under 'psr-4'

~~~
    "Webkul\\GraphQLAPI\\": "packages/Webkul/GraphQLAPI"
~~~

### Run the below mentioned commands from the root directory in terminal:

~~~
    composer dump-autoload
~~~
~~~
    php artisan optimize
~~~
```sh
    php artisan bagisto_graphql:install
```

### Find a file config/lighthouse.php from root and do the following changes:

* change the **guard** index value from **api** to **admin-api** like below mentioned:

~~~
    'guard' => 'admin-api',
~~~

* change the path from *'graphql/schema.graphql'* to **'packages/Webkul/GraphQLAPI/graphql/schema.graphql'** for the **register** index under **schema** array index like below mentioned:

~~~
    'schema' => [
        'register' => base_path('packages/Webkul/GraphQLAPI/graphql/schema.graphql'),
    ],
~~~

* change the *App\\GraphQL\\* path to **Webkul\\GraphQLAPI\\** in all the indexes of **namespace** index:

~~~
    'namespaces' => [
        'models' => ['App', 'Webkul\\GraphQLAPI\\Models'],
        'queries' => 'Webkul\\GraphQLAPI\\Queries',
        'mutations' => 'Webkul\\GraphQLAPI\\Mutations',
        'subscriptions' => 'Webkul\\GraphQLAPI\\Subscriptions',
        'interfaces' => 'Webkul\\GraphQLAPI\\Interfaces',
        'unions' => 'Webkul\\GraphQLAPI\\Unions',
        'scalars' => 'Webkul\\GraphQLAPI\\Scalars',
        'directives' => ['Webkul\\GraphQLAPI\\Directives'],
        'validators' => ['Webkul\\GraphQLAPI\\Validators'],
    ],
~~~

* Add the **JWT_TTL** (JWT time to live) entry in the **.env** file under the **JWT_SECRET** key:

~~~
    JWT_TTL=525600
~~~

### Now to use the graphql-playground for testing the APIs:

~~~
    http://example.com/graphql-playground
~~~

### Or you can also use the Postmen for testing the APIs:

~~~
    http://example.com/graphql
~~~
> That's it, now just execute the project on your specified domain.
