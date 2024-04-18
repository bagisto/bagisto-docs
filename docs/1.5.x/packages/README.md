## Package Development

If you are looking to extend the functionalities of Bagisto eCommerce platform, creating a package is the way to go. A package is a self-contained module that adds specific features to the platform. It allows developers to add custom functionality to the platform without modifying the core codebase.

This guide will walk you through the process of developing a package for Bagisto.

In Bagisto, we have created numerous packages located at **`packages/Webkul/`**. Below is a basic tree structure of a package:

~~~directory-structure
└── Webkul
    └── Blog
        ├── publishable
        │   └── assets
        │       ├── css
        │       │   ├── admin.css
        │       │   ├── default.css
        │       │   └── velocity.css
        │       ├── images
        │       │   └── blog-icon.png
        │       └── js
        │           └── app.js
        └── src
            ├── Config
            │   ├── acl.php
            │   ├── admin-menu.php
            │   └── system.php
            ├── Console
            │   └── Commands
            ├── Contracts
            │   └── Post.php
            ├── Database
            │   ├── Migrations
            │   │   └── 2024_04_21_173057_create_posts_table
            │   └── Seeders
            ├── Events
            ├── Http
            │   ├── Controllers
            │   │   ├── Admin
            │   │   │   └── PostController.php
            │   │   └── Shop
            │   │       └── PostController.php
            │   ├── Middleware
            │   └── Requests
            ├── Listeners
            ├── Mail
            ├── Models
            │   ├── Post.php
            │   └── PostProxy.php
            ├── Providers
            │   ├── BlogServiceProvider.php
            │   └── ModuleServiceProvider.php
            ├── Routes
            │   ├── admin-routes.php
            │   └── shop-routes.php
            ├── Repositories
            │   └── PostRepository.php
            └── Resources
                ├── assets
                │   ├── images
                │   │   └── blog-icon.png
                │   ├── js
                │   │   └── app.js
                │   └── sass
                │       ├── admin.scss
                │       ├── default.scss
                │       └── velocity.scss
                ├── lang
                │   └── app.php
                └── views
                    ├── admin
                    │   └── layouts
                    │       └── style.blade.php
                    ├── index.blade.php
                    ├── create.blade.php
                    ├── edit.blade.php
                    ├── shop
                    │   └── default
                    │       └── layouts
                    │           └── style.blade.php
                    │       ├── index.blade.php
                    │       └── blog-details.blade.php
                    └── velocity
                        └── layouts
                            └── style.blade.php
                        ├── index.blade.php
                        └── blog-details.blade.php

~~~