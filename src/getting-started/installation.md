# Installation

This guide will walk you through installing Bagisto using different methods. Choose the one that best fits your needs.

## 🚀 Quick Installation (Recommended)

The fastest way to get Bagisto up and running:

### Prerequisites

Before starting, ensure you have:
- PHP 8.3 or 8.4 (PHP 8.5 and above are not supported yet)
- Composer 2.5 or higher
- MySQL 8.0.32 or higher
- Web server (Apache/Nginx)

::: tip System Requirements
If you haven't checked the system requirements yet, please review the [Before You Start](/getting-started/before-you-start#system-requirements) guide.
:::

### Step 1: Create Project

Open your terminal and run:

```bash
composer create-project bagisto/bagisto my-bagisto-store
```

### Step 2: Navigate to Directory

```bash
cd my-bagisto-store
```

### Step 3: Run Installation

```bash
php artisan bagisto:install
```

Follow the interactive prompts to configure your application, database, and admin account.

### Step 4: Start Development Server

```bash
php artisan serve
```

Your Bagisto store will be available at `http://localhost:8000`

::: tip Web Server Configuration
If you are using Apache or Nginx, make sure to map your domain's document root to the `public/` directory of your Bagisto project. This ensures your store runs smoothly and routes, assets, and images work as expected.
:::

::: warning Image Issues?
If you notice broken images in your store, check your `.env` file and ensure the `APP_URL` value matches exactly with your site's document root URL (e.g., `http://localhost:8000` or your production domain). A mismatch can cause asset loading problems.
:::

::: warning Mixed Content (HTTPS/HTTP) Error?
If your homepage or assets fail to load and you see browser warnings about "mixed content," this means some resources are being loaded over HTTP while your site is served over HTTPS. This can break your site in modern browsers. See the **Mixed Content (HTTPS/HTTP) Error** section in [Common Troubleshooting](#🛠%EF%B8%8F-common-troubleshooting) below for solutions.
:::


## 🖥️ GUI Installation

If you prefer a web-based installer:

::: warning Important
Ensure Composer is installed and your web server is properly configured before proceeding.
:::

### Method 1: Using Composer

```bash
composer create-project bagisto/bagisto
```

Configure your web server's document root to the `public/` directory inside your Bagisto project (e.g., `/path/to/bagisto/public`), then visit:
```
http://localhost/
```

### Method 2: Download Package

1. [Download Bagisto](https://bagisto.com/en/download/) from the official website
2. Extract the downloaded file
3. Navigate to the project directory
4. Run:
  ```bash
  composer install
  ```
5. Configure your web server’s document root to point to the `public/` directory inside your Bagisto project (e.g., `/path/to/bagisto/public`), then open your browser and visit:
  ```
  http://localhost/
  ```

## 🔧 Manual Installation

For advanced users who want complete control over the installation process.

::: warning Important
Ensure Composer is installed and your web server is properly configured before proceeding.
:::

### Step 1: Get Bagisto

You can get Bagisto in two ways:

- **Method 1: Composer**  
  Create a new project using Composer. See [GUI Installation - Method 1](#method-1-using-composer) for step-by-step instructions.

- **Method 2: Download Package**  
  Download the package from the [official website](https://bagisto.com/en/download/) or clone the [GitHub repository](https://github.com/bagisto/bagisto). Refer to [GUI Installation - Method 2](#method-2-download-package) for details.

### Step 2: Configure Environment

1. Copy environment file and generate key:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

2. Edit your `.env` file with database credentials and application settings.

### Step 3: Setup Store

::: tip Database Configuration
This step assumes your database is already created and configured in the `.env` file. Make sure your database connection details are correct before proceeding.
:::

```bash
php artisan migrate:fresh --seed
php artisan storage:link
php artisan optimize:clear
```

### Step 4: Launch Store

```bash
php artisan serve
```

Visit `http://localhost:8000` to access your store.

## 🐳 Docker Installation

Perfect for containerized environments and easy deployment across different systems.

### Prerequisites

- [Docker](https://docs.docker.com/install/) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/) (for Method 2)

### Method 1: Using Docker Hub (Recommended)

The quickest way to get Bagisto running with Docker:

#### Step 1: Pull Bagisto Image

```bash
docker pull webkul/bagisto:latest
```

#### Step 2: Run Container

```bash
docker run -it -d -p 80:80 webkul/bagisto:latest
```

::: tip Port Configuration
If port 80 is already in use, you can use a different port:
```bash
docker run -it -d -p 8082:80 webkul/bagisto:latest
```
Then access at `http://localhost:8082`
:::

#### Step 3: Access Your Store

Open your browser and visit `http://localhost`

### Method 2: Using Docker Compose

For more control and customization:

#### Step 1: Clone Repository

```bash
git clone https://github.com/bagisto/bagisto-docker.git bagisto-docker
cd bagisto-docker
```

#### Step 2: Pick a web server runtime

The repository ships **three interchangeable web server runtimes** — pick whichever you want to run. Each has its own compose file that builds the runtime image and brings up MySQL, phpMyAdmin and Mailpit:

| Runtime | Web server | Compose file |
|---------|------------|--------------|
| `nginx-php`     | Nginx + PHP-FPM       | `docker-compose.nginx-php.yml` |
| `litespeed-php` | OpenLiteSpeed + lsphp | `docker-compose.litespeed-php.yml` |
| `apache-php`    | Apache + mod_php      | `docker-compose.apache-php.yml` |

Adjust the `uid` (to your host UID) or the ports in the chosen file if needed:

```yaml
services:
  nginx-php:
    build:
      args:
        uid: 1000 # set to your host UID
        user: $USER
        container_project_path: /var/www/html/
      context: ./runtimes/nginx-php
      dockerfile: Dockerfile
    image: nginx-php
    ports:
      - 80:80
      - 5173:5173 # Vite dev server
    volumes:
      - ./workspace/:/var/www/html/

  # ... plus mysql, phpmyadmin and mailpit services
```

#### Step 3: Launch Services

Run the setup script to initialize and build everything:

```bash
sh setup.sh
```

This one-time script **asks which runtime you want** (`nginx-php`, `litespeed-php`, or `apache-php`), then builds that runtime's image, starts the services, installs Bagisto into the `workspace/` directory, and seeds demo data. Once completed, you can access Bagisto through your browser.

#### Step 4: Access Services

- **Store**: `http://localhost`
- **Admin Panel**: `http://localhost/admin`
- **PHPMyAdmin**: `http://localhost:3030`
- **Mailpit**: `http://localhost:8025`

::: tip Managing Services
Use the compose file for your chosen runtime. To stop the services, run:
```bash
docker compose -f docker-compose.nginx-php.yml down
```

To start them again, use:
```bash
docker compose -f docker-compose.nginx-php.yml up -d
```
:::

## ⛵ Laravel Sail Installation

Laravel Sail provides a Docker-powered development environment with pre-configured services for Bagisto.

### Prerequisites

- [Docker](https://docs.docker.com/install/) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/)

### Step 1: Get Bagisto

You can get Bagisto in two ways:

- **Method 1: Composer**  
  Create a new project using Composer. See [GUI Installation - Method 1](#method-1-using-composer) for step-by-step instructions.

- **Method 2: Download Package**  
  Download the package from the [official website](https://bagisto.com/en/download/) or clone the [GitHub repository](https://github.com/bagisto/bagisto). Refer to [GUI Installation - Method 2](#method-2-download-package) for details.

### Step 2: Install Sail

For a fresh project clone, install dependencies:
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer require laravel/sail --dev --ignore-platform-reqs
```

For existing projects:
```bash
composer require laravel/sail --dev
```

### Step 3: Configure Environment

Update your `.env` file with Sail-specific configurations:

```properties
# Database Configuration
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=bagisto
DB_USERNAME=sail
DB_PASSWORD=password

# Redis Configuration
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025

# Elasticsearch Configuration
ELASTICSEARCH_HOST=http://elasticsearch:9200
```

### Step 4: Build and Start Services

```bash
# Build containers
vendor/bin/sail build --no-cache

# Start services in background
vendor/bin/sail up -d
```

### Step 5: Install Bagisto

```bash
vendor/bin/sail artisan bagisto:install
```

### Step 6: Access Services

- **Store**: `http://localhost`
- **Admin Panel**: `http://localhost/admin`
- **MailPit (Email Testing)**: `http://localhost:8025`
- **Kibana (Elasticsearch UI)**: `http://localhost:5601`

::: tip Available Services
Sail includes Laravel, MySQL, Redis, Elasticsearch, Kibana, and MailPit for a complete development environment.
:::

::: tip Managing Sail
To stop services: `vendor/bin/sail down`

To restart: `vendor/bin/sail up -d`

To view logs: `vendor/bin/sail logs`
:::

## 🌐 Accessing Your Store

### Production Environment

Access your store using your domain:
```
https://yourdomain.com
```

::: tip Info
If your Apache (or Nginx) document root is properly mapped to the `public/` directory of your Bagisto project, your store will be accessible at your domain.
:::

### Development Environment

Use the built-in development server:
```bash
php artisan serve
```
Then visit: `http://localhost:8000`

### Admin Panel

Access the admin panel at:
```
https://yourdomain.com/admin
```

**Default Credentials:**
- Email: `admin@example.com`
- Password: `admin123`

::: tip Security
Change the default admin credentials immediately after installation!
:::

### Customer Registration

Customers can register at:
```
https://yourdomain.com/customer/register
```

## 📱 Mobile App Installation

Bagisto also provides a mobile application for your eCommerce store.

### Prerequisites

**Required Versions:**
- Bagisto: v2.0.0 or higher
- Android Studio: Flamingo 2022.2.1 or newer
- Flutter: 3.10.1 or higher
- Dart: 3.0.1 or higher
- Xcode: 14.3 or newer (for iOS)
- Swift: 5 or higher

**Minimum Device Support:**
- Android: API level 21+
- iOS: 12.0+

::: tip Before You Start
Make sure you can run a simple "Hello World" Flutter app first to verify your development environment is properly configured.
:::

### Clone the repository

- Open your terminal or command prompt
- Navigate to the directory where you want to save the project
- Use the git clone command followed by the repository URL

```bash
git clone https://github.com/bagisto/opensource-ecommerce-mobile-app.git
```

### Install dependencies

- Navigate to the project's directory

```bash
cd <repository-name>
```
  
- Run the following command to install the required packages

```bash
flutter pub get
```

### Generate Required files

- Navigate to the project's directory

```bash
cd <repository-name>
```

- Run the following command to generate the required files

```bash
flutter pub run build_runner build --delete-conflicting-outputs 
```

### Connect a device or emulator

* Physical Device

  1. Enable USB debugging on your device
  2. Connect it to your computer using a USB cable.

* Emulator

  1. Start an Android or iOS emulator using your preferred IDE or tools.

### Run the Project

- Use the following command to build and run the project

```bash
flutter run
```
### Minimum Versions

- Android: 21
- iOS: 12

### Configurations Steps

### For Setup

Change the baseUrl  as per your store

**Path:** lib/utils/server_configuration.dart

```bash
static const String baseUrl = ‘....’;
```

:::tip Note
Add the value of the complete URL ending with the GraphQL API endpoint. E.g - https://example.com/graphql 
:::

### For Theme

Change the Theme for your app

**Path:** lib/utils/mobikul_theme.dart

```bash
static const Color primaryColor = Color(***********);  
static const Color accentColor = Color(***********); 
```

### For Push Notification Service

- Android 

Replace "google-services.json".
- iOS 

Replace "GoogleService-Info.plist".

:::tip Note
Helpful Articles

Android  → https://mobikul.com/knowledgebase/generating-google-service-file-enable-fcm-firebase-cloud-messaging-android-application/

iOS → https://mobikul.com/knowledgebase/generating-new-googleservice-info-plist-file-fcm-based-project-ios-app/
:::

### For Application Title

* Android

  1. **Path:** android/app/src/main/AndroidManifest.xml
  2. **Change app name:** android:label="***********"

* iOS

  1. Go to the general tab and identity change the display name to your app name
 
:::tip Note 
For Homepage Header Title - Go to ‘assets/language/en.json’
(Note: Here, “en” in en.json refers to the languages that would be supported within the application)
:::

### For Splash Screen

* For adding Lottie as Splash Screen

  1. **Path:** assets/lottie/splash_screen.json
  2. After updating the Lottie file, update the ‘splashLottie’ in lib/utils/assets_constants.

```bash
 static const String splashLottie = "assets/lottie/splash_screen.json";
```
 
* For adding an Image as a Splash Screen

  1. **Path:** assets/images/splash.png
  2. After updating the Image file, update the ‘splashImage’ in lib/utils/assets_constants.

```bash
  static const String splashImage = "assets/images/splash.png";
```
### For App Icon

* **Android:** Open the android folder in Android Studio and then right click app > new > Image Asset set Image.
* **iOS:** Replace the icons over the path > ios/Runner/Assets.xcassets/AppIcon.appiconset

## 🛠️ Common Troubleshooting

If you encounter issues after installation, check the following:

- **Web Server Document Root**: Ensure your Apache or Nginx document root is mapped to the `public/` directory of your Bagisto project. Incorrect mapping can cause routing, asset, or image issues.

- **APP_URL for Images**: If images are broken, verify that the `APP_URL` in your `.env` file matches your site's actual URL (including port if needed). A mismatch can cause asset loading problems.

- **Storage Link Issue**: If product images or uploads are not displaying, ensure you have run:

  ```bash
  php artisan storage:link
  ```
  This command creates a symbolic link from `public/storage` to `storage/app/public`. If you still face issues, check your server permissions and that the link exists.

- **Mixed Content (HTTPS/HTTP) Error**: Mixed content errors occur when resources are loaded over HTTP while your site is served over HTTPS, causing browsers to block insecure requests and break the homepage or assets. To resolve this:

  **Solution 1: Basic Checks:**
  - Ensure `APP_URL` in your `.env` file starts with `https://` if your site uses SSL.
  - Update any hardcoded URLs in your configuration, database, or theme files to use `https://`.
  - Clear your application cache:
    ```bash
    php artisan optimize:clear
    ```
  - If using a CDN or proxy, make sure it is configured to serve assets over HTTPS.

  **Solution 2: Setup Trusted Proxies (Laravel 11+)**

  If your app is behind a load balancer, reverse proxy, or CDN (Cloudflare, AWS ELB, etc.), configure trusted proxies in `bootstrap/app.php`:
  ```php{9,12-15}
  <?php

  ...

  return Application::configure(basePath: dirname(__DIR__))
      //
      ->withMiddleware(function (Middleware $middleware) {
          // Trust all proxies
          $middleware->trustProxies(at: '*');
          
          // Or specify proxy IPs
          $middleware->trustProxies(at: [
              '192.168.1.1',
              '10.0.0.0/8',
          ]);
      })
      ->withExceptions(function (Exceptions $exceptions) {
          //
      })
      ->create();
  ```

  **Solution 3: Force HTTPS Schema in Service Provider**

  To force all URLs to use HTTPS, add this to the `boot()` method of your `AppServiceProvider`:

  ```php{24}
  <?php

  namespace App\Providers;

  use Illuminate\Support\ServiceProvider;
  use Illuminate\Support\Facades\URL;

  class AppServiceProvider extends ServiceProvider
  {
      /**
       * Register any application services.
       */
      public function register(): void
      {
          //
      }

      /**
       * Bootstrap any application services.
       */
      public function boot(): void
      {
          if (config('app.env') === 'production') {
              URL::forceScheme('https');
          }
      }
  }
  ```

  This ensures all generated URLs use HTTPS in production.