# Installation

This guide will walk you through installing Bagisto using different methods. Choose the one that best fits your needs.

## 🚀 Quick Installation (Recommended)

The fastest way to get Bagisto up and running:

### Prerequisites

Before starting, ensure you have:
- PHP 8.2 or higher
- Composer 2.5 or higher
- MySQL 8.0.32 or higher
- Web server (Apache/Nginx)

::: tip System Requirements
If you haven't checked the system requirements yet, please review the [Before You Start](/docs/getting-started/before-you-start#system-requirements) guide.
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
docker pull webkul/bagisto:2.3.6
```

#### Step 2: Run Container

```bash
docker run -it -d -p 80:80 webkul/bagisto:2.3.6
```

::: tip Port Configuration
If port 80 is already in use, you can use a different port:
```bash
docker run -it -d -p 8082:80 webkul/bagisto:2.3.6
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

#### Step 2: Configure Docker Compose

Edit `docker-compose.yml` to adjust ports and settings:

```yaml
version: '3.1'

services:
    bagisto-php-apache:
        build:
            args:
                container_project_path: /var/www/html/
                uid: 1000
                user: $USER
            context: .
            dockerfile: ./Dockerfile
        image: bagisto-php-apache
        ports:
            - 80:80
        volumes:
            - ./workspace/:/var/www/html/

    bagisto-mysql:
        image: mysql:8.0
        command: --default-authentication-plugin=mysql_native_password
        restart: always
        environment:
            MYSQL_ROOT_HOST: '%'
            MYSQL_ROOT_PASSWORD: root
        ports:
            - 3306:3306
        volumes:
            - ./.configs/mysql-data:/var/lib/mysql/

    bagisto-phpmyadmin:
        image: phpmyadmin:latest
        restart: always
        environment:
            PMA_HOST: bagisto-mysql
            PMA_USER: root
            PMA_PASSWORD: root
        ports:
            - 8080:80
```

#### Step 3: Launch Services

Run the following command to initialize and build the Docker containers:

```bash
sh setup.sh
```

This is a one-time setup script that prepares your environment for Bagisto. It will build the necessary Docker images, install dependencies, and configure your containers according to the Dockerfile and `docker-compose.yml`. Once completed, your services will be ready to start and you can access Bagisto through your browser.

#### Step 4: Access Services

- **Store**: `http://localhost`
- **Admin Panel**: `http://localhost/admin`
- **PHPMyAdmin**: `http://localhost:8080`

::: tip Managing Services
To stop the Docker Compose services, run:
```bash
docker compose down
```

To start them again, use:
```bash
docker compose up -d
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

```env
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
