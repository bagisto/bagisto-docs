---
title: Installation & configuration-Bagisto
layout: default
---

### Requirements <a id="requirements"></a>:

* **OS**: Ubuntu 16.04 LTS or higher.
* **SERVER**: Apache 2 or NGINX
* **RAM**: 3 GB or higher.
* **PHP**: 7.1.17 or higher.
* **Processor**: Clock Cycle 1 Ghz or higher.
* **For MySQL users**: 5.7.23 or higher.
* **For MariaDB users**: 10.2.7 or Higher.
* **Node**: 8.11.3 LTS or higher.
* **Composer**: 1.6.5 or higher.

### Installation & Configuration <a id="#configuration"></a>:

**1. Try our new GUI installer to install Bagisto:**

##### a. Download zip from the link below:

[Download](https://github.com/bagisto/bagisto/archive/v0.1.5.zip)

##### b. Extract the contents of zip and execute the project in browser:

~~~
http(s)://localhost/bagisto/public
~~~

or

~~~
http(s)://example.com/public
~~~

**2. Try our old fashioned way to install Bagisto:**

##### Execute these commands below as in their order

~~~
1. composer create-project bagisto/bagisto
~~~

**Now configure your database:**

If the above command was completed successfully, then you'll find directory **bagisto** and all of the code will be inside it.

Find file **.env** inside **bagisto** directory and set the environment variables listed below:

* **APP_URL**
* **DB_CONNECTION**
* **DB_HOST**
* **DB_PORT**
* **DB_DATABASE**
* **DB_USERNAME**
* **DB_PASSWORD**

Although, mailer environment variables are also required to be set up as **Bagisto** requires emails to send to customers and admins for various functionalities that are built in.

~~~
2. php artisan migrate
~~~

~~~
3. php artisan db:seed
~~~

~~~
4. php artisan vendor:publish
-> Press 0 and then press enter to publish all assets and configurations.
~~~

~~~
5. php artisan storage:link
~~~

~~~
6. composer dump-autoload
~~~


**To execute Bagisto**:

##### On server:

~~~
Open the specified entry point in your hosts file in browser or make entry in hosts file if not done.
~~~

##### On local:

~~~
php artisan serve
~~~


**How to log in as admin:**

> *http(s)://example.com/admin/login*

~~~
email:admin@example.com
password:admin123
~~~

**How to log in as customer:**

*You can directly register as customer and then login.*

> *http(s)://example.com/customer/register*


