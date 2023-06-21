# Installation

[[TOC]]

## Install Using GUI Installer

To install Bagisto using our GUI installer, follow these steps:

1. [Download Bagisto](https://bagisto.com/en/download/) from our website.
2. Extract the contents of the downloaded zip file.
3. Navigate to the project root directory.
4. Run the following command:

    ```sh
    composer install
    ```

5. Configure your HTTP server to point to the **`public/`** directory of the project.
6. Open your browser and access the following URL:

    ```
    http://localhost/bagisto/public/
    ```

   This will launch the Bagisto installer.

## Install Using Composer

To install Bagisto using Composer, use the following steps:

1. Run the following command:

    ```sh
    composer create-project bagisto/bagisto
    ```

2. Navigate to the project root directory.
3. Open the **`.env`** file and add your database credentials:

    ```editorconfig
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=
    ```

4. Run the following command:

    ```sh
    php artisan bagisto:install
    ```

    ::: warning
    During the installation process, if the **`.env`** file doesn't exist, the installer will prompt you to provide the necessary information.
    :::

    - Follow the prompts during the installation process to provide the following details:

    ```
    - Please Enter the APP URL :
    - Please Enter the Admin URL : 
    - Please select the default locale or press enter to continue [en]:
    - Please enter the default timezone [Asia/Kolkata]:
    - Please enter the default currency [USD]:
    - What is the database name to be used by Bagisto?:
    - What is your database username?:
    - What is your database password?:
    ```

## Start Using Bagisto

### On a Production Server

To access Bagisto on a production server, open your domain in a web browser. For example:

```
https://example.com/
```

### On Your Local Server

To access Bagisto on your local server, follow these steps:

1. Configure your HTTP server to point to the **`public/`** directory of the project.
2. Run the following command:

    ```sh
    php artisan serve
    ```

3. Open your browser and access the provided local server URL.

### Login as an Admin

To log in as an admin, visit **`https://example.com/admin/`**. If you used the **`php artisan bagisto:install`** command, use the following credentials:

```
Email: admin@example.com
Password: admin123
```

### Login as a Customer

To log in as a customer, you can directly register on **`https://example.com/customer/register`**. After registration, you can log in using your credentials on the domain.