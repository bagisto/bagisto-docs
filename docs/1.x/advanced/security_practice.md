# Best Security Practices

## Keep your software up-to-date

- Using HTTPS (Google now uses HTTPS as a ranking factor).

- Keep all software on the server up-to-date.
  - Bagisto
  - Database
  - Adminer/phpMyAdmin
  - Apache
  - Redis, etc.

- Make sure the server operating system is up-to-date for available security patches.

- Manage files only with secure communication protocols (SSH/ SFTP/ HTTPs), disable FTP.

- [ .htaccess ] file to protect system files, when using apache webserver.

- Disable unused ports, and stop services running unnecessarily.

- Restrict access to certain IPs to the admin panel and use Admin logins with two-factor authorization.

- Use of strong and unique passwords.

- Use a properly configured and updated firewall between the payment card data and the public network.

## Limiting error messages

![limiting-error-messages](../../assets/images/best-security-practices/limiting-error-messages.png)

- Edit your apache configuration file to avoid displaying server and os details.

- Set “ServerSignature” to OFF as by default it is ON.

- Add “ServerTokens Prod” to display Apache as product only.

- Besides this, review your server for development leftovers and also make sure that there are.

- No accessible “log files”, “.git directories”, “database dumps” and “.zip files”.

## Allow admin access to certain IPs

- Edit your .htaccess file with the following code

~~~
RewriteEngine On
RewriteCond %{REQUEST*URI} .*/admin
RewriteCond %{REMOTE*ADDR} !=<IP address>
RewriteCond %{REMOTE_ADDR} !=<IP address>
RewriteRule ^(.*)\$ - [R=403,L]
~~~

- Review your server for development leftovers. Make sure there are no accessible "log files", ".git directories", "database dumps", "zip files".

## Restrict files with .git, .zip, .gz, and .sql extensions

- Edit your .htaccess file

~~~
<FilesMatch "\.(git|zip|tar|sql)\$">
    Require all denied
</FilesMatch>
~~~

- Use a Web application firewall to analyze traffic and discover suspicious patterns such as credit card information being sent to an attacker.  

- Make sure only port 80 and 443 are publicly accessible and the rest of the ports are restricted.


## Restrict php execution inside storage directory

- Edit your apache configuration file

  ~~~
  <Directory "~/www/bagisto/public/storage/">
      <FilesMatch "\.php\$">
          Require all denied
      </FilesMatch>
      php_flag engine off
  </Directory>
  ~~~

  ::: tip

  Don't forget to restart apache.

  :::

## Harden your server

- Use of mod_security module to detect and prevent intrusions.

- Use of mod_passive module to prevent brute force attack.

- Allow only specific users to login.

- Disable login to users with empty passwords.

- Check iptable rules to prevent unauthorized access and activity.

- Take regular backup of important files and also save them remotely in a secure environment.

## Use strong and unique passwords

- Use strong and unique passwords, and change them periodically.

  ::: tip

  Use password generator. ([Password Generator](https://passwordsgenerator.net/))
  
  :::

- Limit access to the Bagisto admin by updating the whitelist with the IP address of each computer that is authorized to use the admin.

## Implementation of HTTP Security Headers

- In addition, Headers play a key role in communication between the client and the server, some of
them have been mentioned in order to enhance the web security.

### HTTP Strict Transport Security (HSTS)

- This response header will tell the browser that the application is only to be accessed using https instead of http.

  `Strict-Transport-Security: max-age=<expire-time>`

### Cross Site Scripting Protection (X-XSS Protection)

- This response header will enforce browsers to detect cross site scripting attacks and not to execute malicious js script in response.

  `X-XSS-Protection: 1; mode=block`

### X-Frame-Options​

- This response header enables the protection of applications against clickjacking. It tells the browser whether the content can be displayed within frames.

  `X-Frame-Options: deny`

### X-Content-Type-Options​

- This header will force the browser to disable MIME sniffing.

- MIME sniffing vulnerability occurs when an attacker uploads an HTML file as a different file type such as jpg.

  `X-Content-Type-Options: nosniff`

### Content Security Policy (CSP)

- This response header allows application administrators to control resources that can be loaded in users' browsers and helps to detect and mitigate attacks such as xss, clickjacking.

### Continuous Logging And Monitoring

- Likewise, monitor all access to the network and cardholder data environment.
- Keep an eye on large volume orders for a single item from a new customer.
- A series of orders, shipped to the same address using different payment methods.
