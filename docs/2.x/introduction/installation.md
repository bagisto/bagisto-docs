# Installation

[[TOC]]

## Install Using GUI Installer

To install Bagisto using our GUI installer, you can follow any of the following methods:

#### Method 1:

1. Choose the directory where you want to install Bagisto. Open your terminal and navigate to this directory. 

2. Once you are in the desired directory, run the following command in your terminal to install Bagisto:

    ```sh
    composer create-project bagisto/bagisto
    ```

3. Configure your HTTP server to point to the **`public/`** directory of the project.

4. Open your browser and access the following URL:

    ```
    http://localhost/bagisto/public/
    ```

  This will launch the Bagisto installer.

#### Method 2:

Otherwise you can download the zip file and install it using the following steps:

1. [Download Bagisto](https://bagisto.com/en/download/) from our website.

2. Extract the contents of the downloaded

3. Navigate to the project root directory.

4. Run the following command:

    ```sh
    composer create
    ```

5. Configure your HTTP server to point to the **`public/`** directory of the project.

6. Open your browser and access the following URL:

    ```
    http://localhost/bagisto/public/
    ```

   This will launch the Bagisto installer.

::: warning
Ensure that Composer is installed on your system
:::

## Install Using Composer

To install Bagisto using Composer, use the following steps:

1. Choose the directory where you want to install Bagisto. Open your terminal and navigate to this directory. 

2. Once you are in the desired directory, run the following command in your terminal to install Bagisto:

3. Run the following command:

    ```sh
    composer create-project bagisto/bagisto
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
    - Please Enter the Application Name : 
    - Please select the default locale :
    - Please enter the default currency :
    - Please choose the Allowed Locales for your channels :
    - Please choose the Allowed Currencies for your channels :
    - Please select the Database Connection :
    - Please enter the Database Host :
    - Please enter the Database Port Number :
    - Please enter the Database Name :
    - Please enter the Database Prefix :
    - Please enter the Database Username :
    - Please enter the Database Password :
    ```

    - For Create your admin credentials
    ```
    - Enter the Name of Admin User :
    - Enter the Email address of the Admin User :
    - Configure the Password for admin user :
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

## Installation of Mobile App

Before beginning with the installation, you will need the following with the mentioned versions

- Bagisto Version - v2.0.0
- Android Studio Version - Flamingo | 2022.2.1 
- Flutter Version - 3.10.1
- Dart - 3.0.1
- Xcode - 14.3
- Swift - 5

Make sure you have installed the API module and set this up properly on your bagisto.

> NOTE: It is recommended that you run a simple Hello World program in Flutter first before proceeding further so that you are sure that the environment is properly set up.

### Clone the repository

- Open your terminal or command prompt
- Navigate to the directory where you want to save the project
- Use the git clone command followed by the repository URL

```sh
git clone https://github.com/bagisto/opensource-ecommerce-mobile-app.git
```

### Install dependencies

- Navigate to the project's directory

```sh
cd <repository-name>
```
  
- Run the following command to install the required packages

```sh
flutter pub get
```

### Generate Required files

- Navigate to the project's directory

```sh
cd <repository-name>
```

- Run the following command to generate the required files

```sh
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

```sh
flutter run
```
### Minimum Versions

- Android: 21
- iOS: 12

### Configurations Steps

### For Setup

Change the baseUrl  as per your store

**Path:** lib/utils/server_configuration.dart

```sh
static const String baseUrl = ‘....’;
```

> Note: Add the value of the complete URL ending with the GraphQL API endpoint. E.g - https://example.com/graphql 

### For Theme

Change the Theme for your app

**Path:** lib/utils/mobikul_theme.dart

```sh
static const Color primaryColor = Color(***********);  
static const Color accentColor = Color(***********); 
```

### For Push Notification Service

- Android 

Replace "google-services.json".
- iOS 

Replace "GoogleService-Info.plist".

> Helpful Articles

> Android  → https://mobikul.com/knowledgebase/generating-google-service-file-enable-fcm-firebase-cloud-messaging-android-application/

> iOS → https://mobikul.com/knowledgebase/generating-new-googleservice-info-plist-file-fcm-based-project-ios-app/

### For Application Title

* Android

  1. **Path:** android/app/src/main/AndroidManifest.xml
  2. **Change app name:** android:label="***********"

* iOS

  1. Go to the general tab and identity change the display name to your app name
 
> For Homepage Header Title - Go to ‘assets/language/en.json’
> (Note: Here, “en” in en.json refers to the languages that would be supported within the application)

### For Splash Screen

* For adding Lottie as Splash Screen

  1. **Path:** assets/lottie/splash_screen.json
  2. After updating the Lottie file, update the ‘splashLottie’ in lib/utils/assets_constants.

```sh
 static const String splashLottie = "assets/lottie/splash_screen.json";
```
 
* For adding an Image as a Splash Screen

  1. **Path:** assets/images/splash.png
  2. After updating the Image file, update the ‘splashImage’ in lib/utils/assets_constants.

```sh
  static const String splashImage = "assets/images/splash.png";
```
### For App Icon

* **Android:** Open the android folder in Android Studio and then right click app > new > Image Asset set Image.
* **iOS:** Replace the icons over the path > ios/Runner/Assets.xcassets/AppIcon.appiconset

### API Documentation

For the API Documentation, please go through - https://github.com/bagisto/headless-ecommerce/

### Contributing

Contributions are welcome! Follow the contribution guidelines to get started.

### License

Bagisto is open-sourced software licensed under the MIT license.
