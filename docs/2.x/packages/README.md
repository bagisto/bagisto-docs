## Package Development

If you are looking to extend the functionalities of Bagisto eCommerce platform, creating a package is the way to go. A package is a self-contained module that adds specific features to the platform. It allows developers to add custom functionality to the platform without modifying the core codebase.

This guide will walk you through the process of developing a package for Bagisto.

In Bagisto, we have created numerous packages located at **`packages/Webkul/`**. Below is a basic tree structure of a package:

~~~directory-structure
└── Webkul
    └── Blog
        └── src
            ├── Config
            │   ├── acl.php
            │   ├── admin-menu.php
            │   ├── shop-menu.php
            │   └── system.php
            ├── Console
            │   └── Commands
            ├── Contracts
            │   └── Post.php
            ├── Database
            │   ├── Migrations
            │   │   └── 2023_10_10_122434_create_posts_table.php
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
                │   └── css
                │       └── app.css
                ├── lang
                │   └── app.php
                └── views
                    ├── admin
                    │   └── blog
                    │      ├── create.blade.php
                    │      ├── edit.blade.php
                    │      └── index.blade.php
                    └── shop
                        └── default
                            ├── index.blade.php
                            └── blog-details.blade.php

~~~