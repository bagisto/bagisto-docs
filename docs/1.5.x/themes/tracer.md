# Blade File Tracer

When you want to change or create a theme it can become difficult to find out which part contains the code that you need to work on.  

This is why we added the blade file tracer as it will help developers, contributors & partners who deal with Bagisto to find the blade file of the templates/views and understand the structure of the project.

## Configuration
Let’s start to make this easier with just a simple config change.  
Go to your Bagisto root directory and open the file **config/view.php**, inside this file change the `tracer` value to `true`.

```php
    /*
    |--------------------------------------------------------------------------
    | Blade File Tracer
    |--------------------------------------------------------------------------
    |
    | Shows blade file path in front
    |
    */

    'tracer' => true,
```

Now return to your Bagisto root directory and run the following commands
```bash
php artisan view:clear
php artisan config:cache
```

Now you are ready to visit your Storefront & Admin, you will see the blade file hint path in each block of your template.
