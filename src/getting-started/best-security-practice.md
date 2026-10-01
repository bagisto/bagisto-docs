# Best Security Practices

Bagisto has several protections switched on by default, and a few that you switch on or configure yourself. This page lists both, then the server settings that matter for a Bagisto store; work through it before a store goes live.

## What Bagisto Already Does

| Protection | What it does | Where |
|---|---|---|
| Security headers | Adds `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection` and `Referrer-Policy` to every response | `Webkul\Core\Http\Middleware\SecureHeaders`, appended in `bootstrap/app.php` |
| CSRF protection | Checks the CSRF token on every `web` route, except `stripe/*`, the PayU, PhonePe and PayGlocal callback and webhook routes, and the web installer's `install/api/*` routes | `bootstrap/app.php` for `stripe/*`; the others call `withoutMiddleware(PreventRequestForgery::class)` in their package's `Routes/web.php` |
| Admin permissions | Refuses an admin route that isn't mapped in the ACL, for every role without full access | `Webkul\User\Http\Middleware\Bouncer` |
| Privilege escalation | Refuses a role or admin user carrying a permission the signed-in admin doesn't hold, and trims the roles form's permission tree to what they may grant | `Webkul\User\Bouncer` (`canGrantRole()`, `canGrantPermissions()`, `getGrantableAclItems()`) |
| Two-factor authentication | Lets each admin protect their account with an authenticator app | `Webkul\User\TwoFactorAuthentication` |
| Session revocation | Stops a request still in flight from writing a signed-out session back, and on the `database` session driver drops a user's other sessions when they reset their password | `Webkul\Core\Http\Middleware\PreventSessionRevival`, `Webkul\Core\Helpers\RevokedSessions`, `Webkul\Core\Helpers\SessionPurger` |
| HTML purification | `clean_content()` runs HTML through HTMLPurifier with the allowlist in `config/purify.php`, then strips Blade syntax and PHP tags | `packages/Webkul/Core/src/Http/helpers.php` |
| SVG sanitizing | Removes scripts and remote references from SVG files uploaded through the editor, review attachments, image search, locale logos, configuration fields and product `image` and `file` attributes | `Webkul\Core\Traits\Sanitizer` |
| Spreadsheet formula escaping | Prefixes a cell with `'` when its text starts with `=`, `+`, `-`, `@`, `\|` or `%`, so an exported value can't run as a formula when the file is opened | `Webkul\Core\Traits\Sanitizer::sanitizeSpreadsheetValue()`, used by the DataGrid, product and reporting exports |
| Installer lock | Refuses the web installer once the store is installed | `Webkul\Installer\Http\Middleware\CanInstall` |
| Sign-in throttling | Refuses sign-in for the rest of the minute after five failed admin attempts, or six failed customer attempts, for the same email and IP address | `ThrottlesLogins` in the Admin and Shop `SessionController` and the Shop API `CustomerController` |
| Rate limits | Per minute: five two-factor verification or setup attempts, or admin password-reset requests; six customer password-reset requests or verification email resends; ten image search uploads, review submissions, review translations or coupon applications; and, per IP address, five EU withdrawal look-ups and twenty requests to the guest withdrawal form | `packages/Webkul/Admin/src/Routes/web/`, `packages/Webkul/Shop/src/Routes/`, `Webkul\EUWithdrawal\Providers\EUWithdrawalServiceProvider` |

`SecureHeaders` sends `X-Frame-Options: DENY`, except on a response a controller marks as framable, such as the storefront preview in the Appearance editor, which gets `Content-Security-Policy: frame-ancestors 'self'` instead. It also sends `Strict-Transport-Security: max-age=31536000; includeSubDomains`. Once a browser has seen that header over HTTPS, it refuses plain HTTP for the domain and all of its subdomains for a year, so serve every subdomain over HTTPS before going live.

## Change the Admin URL

Every admin route is prefixed with `config('app.admin_url')`, which reads `APP_ADMIN_URL` and defaults to `admin`:

```properties
APP_ADMIN_URL=backoffice
```

After changing it, clear the cached configuration and routes with `php artisan optimize:clear`, and in production run `php artisan optimize` again. The admin sign-in page is then at `/backoffice/login`.

A different prefix keeps automated scans away from the sign-in page. It doesn't replace two-factor authentication or an IP allowlist.

## Use Two-Factor Authentication for Admins

Each admin turns on two-factor authentication for their own account, from the account page of the admin panel. Bagisto shows a QR code for a time-based authenticator app (through `pragmarx/google2fa`) and eight single-use backup codes. From then on, after that admin signs in, the `Bouncer` middleware opens no admin page until they enter a code from the app or a backup code. Each app code is accepted once: `admins.two_factor_last_used_window` records the time window of the last code used, so the same code can't be replayed.

- No setting forces every admin to use it. Make it a rule for accounts with full permissions.
- The secret is stored encrypted with `APP_KEY`. If `APP_KEY` changes, the saved secrets can't be decrypted, and those admins can't pass verification.
- Backup codes are stored as hashes. An admin who loses both the device and the codes needs someone with database access to clear the `two_factor_*` columns of their row in the `admins` table, which is what turning the feature off does (`TwoFactorAuthentication::getDisableValues()`).

## Production Environment Settings

Set the keys in step 1 of the [production checklist](./deployment.md#production-checklist). Three matter most for security:

- **`APP_DEBUG=false`.** Otherwise error pages show code, queries and environment values.
- **`SESSION_SECURE_COOKIE=true`**, with an `https://` `APP_URL`, so the session cookie is only sent over HTTPS.
- **`APP_KEY`**, generated once and kept secret. It encrypts cookies, sessions and two-factor secrets.

`config/session.php` serializes sessions with `php`. Setting `SESSION_SERIALIZATION=json` protects against object injection if `APP_KEY` ever leaks, but switching logs out every existing session.

## Code You Add

The protections above only cover your own code when it uses them:

- Pass stored HTML through `clean_content()` before you print it unescaped.
- Give every admin route of your package an entry in its `acl.php`; see [Access Control List](../package-development/access-control-list.md).
- Validate every upload with an explicit `mimes:` list, and don't accept `svg` in an upload that customers can reach.
- Don't exclude a route from CSRF checks, in `bootstrap/app.php` or with `withoutMiddleware()`, to make a form work. A gateway callback that skips the check must verify the gateway's signature instead.

## Web Server

- **Serve only `public/`.** Point the document root at `public/`, never at the project root, where `.env`, `storage/` and `vendor/` would become downloadable. See [Web Server Configuration](./deployment.md#web-server-configuration).
- **Deny dotfiles.** The production Docker images block every path segment that starts with a dot, except `.well-known`:

  **File:** `docker/production/nginx/config/nginx.conf`

  ```nginx
  location ~ /\.(?!well-known).* {
      deny all;
  }
  ```

- **Turn off directory listings.** `public/.htaccess` sets `Options -MultiViews -Indexes` for Apache, and the production Apache virtual host sets `Options -Indexes +FollowSymLinks`.
- **Don't run PHP from uploads.** Uploaded files are stored in `storage/app/public` and served through the `public/storage` link. The Nginx configuration on the deployment page passes only `index.php` to PHP-FPM. On Apache, add this to the virtual host:

  ```apache
  <LocationMatch "^/storage/.+\.php$">
      Require all denied
  </LocationMatch>
  ```

- **Restrict the admin panel by IP address.** With Nginx, add a location for your admin prefix above the other `location` blocks, and replace the example address with yours:

  ```nginx
  location ~ ^/admin(/|$) {
      allow 203.0.113.10;
      deny all;

      try_files $uri $uri/ /index.php?$query_string;
  }
  ```

- **Hide platform details.** The production image's `php.ini` sets `expose_php = Off` and `display_errors = Off`. `SecureHeaders` also sends `X-Built-With: Bagisto`; to drop it, add `fastcgi_hide_header X-Built-With;` to the Nginx PHP location.

## Report a Vulnerability

Don't open a public issue. Email **support@bagisto.com**, or open a ticket at [Bagisto Support](https://bagisto.uvdesk.com/en/), as `SECURITY.md` in the Bagisto repository describes.

## Related Pages

- [Deployment](./deployment.md): the rest of a production setup, including web server configurations.
- [Access Control List](../package-development/access-control-list.md): permissions for your package's admin routes.
