# Installation

## Use Our GUI Installer
1. [Download Bagisto](https://bagisto.com/en/download/)
2. Extract the contents of the zip file.
3. Point your HTTP server to the public/ directory of the project and open it on your browser.</br>For example:
    - `https://example.com/`
4. This will detect Bagisto and start the installer.

## Install Bagisto Using _composer_
  
```
composer create-project bagisto/bagisto
```
 
- Start the installation script.
```sh
php artisan bagisto:install
```

### Features of above installation command
::: warning
It will check existance of the .env file, if it exists then please update the file manually with the below details.  
::: 

```
-   APP_TIMEZONE
-   APP_LOCALE
-   LOG_CHANNEL
-   APP_CURRENCY
-   DB_DATABASE
-   DB_USERNAME
-   DB_PASSWORD
```

::: warning
If the .env file does not exists then it will ask to provide the details on command prompts.  

::: 
- To start the installation, provide the details of the following command prompts: 
```sh
-  Please select the default locale or press enter to continue [en]: 
-  Please enter the default timezone [Asia/Kolkata]:
-  Please enter the default currency [USD]: 
-  What is the database name to be used by Bagisto?: 
-  What is your database username?:
-  What is your database password?:
```

# Start Using Bagisto

### On a production server

- Open your domain on the browser.</br> For example:
    - `https://example.com/`

### On your local device

```sh
php artisan serve
```

### How to log in to your domain as an admin

Go to `https://example.com/admin/`, in case `php artisan bagisto:install` is opted, use the following credentials.
```
email: admin@example.com
password: admin123
```

### How to log in to your domain as a customer
You can directly register on `https://example.com/customer/register` as a customer, and then log in to your domain.
