---
title: "Security Best practices"
layout: "default"
---

# Security Best practices

![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon}
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/security_practice.md){:.edit-github target="\_blank"}

- Using HTTPS (google now uses HTTPS as a ranking factor).

- Keep all software on the server up-to-date.

  - Bagisto
  - database
  - adminer/phpmyadmin
  - apache
  - redis, etc

- Make sure the server operating system is up-to-date for available security patches.

- Manage files only with secure communication protocols (SSH/ SFTP/ HTTPs), disable FTP.

- [ .htaccess ] file to protect system files, when using apache web server

### Restrict php execution inside storage directory

- Edit your apache configuration file

```
    <Directory "~/www/bagisto/public/storage/">
    <FilesMatch "\.php\$">
    Require all denied
    </FilesMatch>
    php_flag engine off
    </Directory>
```

Restart apache

- use strong and unique passwords, and change them periodically.
  https://passwordsgenerator.net/

- Limit access to the bagisto admin by updating the whitelist with the ip address of each computer that is authorized to use the admin.

### Allow admin access to certain IPs

- Edit your .htaccess file

```
    RewriteEngine On
    RewriteCond %{REQUEST*URI} .*/admin
    RewriteCond %{REMOTE*ADDR} !=<IP address>
    RewriteCond %{REMOTE_ADDR} !=<IP address>
    RewriteRule ^(.*)\$ - [R=403,L]
```

- Review your server for development leftovers. Make sure there are no accessible "log files", ".git directories", "database dumps", "zip files".

### Restrict files with .git .zip .gz .sql extension

- Edit your .htaccess file

```
    <FilesMatch "\.(git|zip|tar|sql)\$">
    Require all denied
    </FilesMatch>
```

- Use Web application firewall to analyze traffic and discover suspicious patterns such as credit card information being sent to an attacker.

- Make sure only port 80 and 443 are publicly accessible and rest of the ports are restricted.
