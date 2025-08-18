# 🔄 Upgrade Guide

Keep your Bagisto installation up-to-date with the latest features and security improvements.

::: warning Before You Start
Always backup your database and files before upgrading. Test the upgrade process in a staging environment first.
:::

## 📋 Prerequisites

Before upgrading, ensure you have:

- **Database Backup** - Complete backup of your current database
- **File Backup** - Backup of customizations and uploaded files
- **Server Requirements** - Check if your server meets the new version requirements
- **Downtime Planning** - Schedule maintenance window for the upgrade

## 🚀 Upgrade Process

### Step 1: Download Latest Version

Download the latest version of Bagisto from one of the following links:
- [Download From Official Bagisto Site](https://bagisto.com/en/download/)
- [Download From GitHub](https://github.com/bagisto/bagisto)

Get the latest Bagisto release:

::: code-group
```bash [GitHub (Recommended)]
# Clone the latest release
git clone https://github.com/bagisto/bagisto.git bagisto-new
cd bagisto-new
git checkout v2.3.6  # Replace with latest version
```
:::

### Step 2: Install Dependencies

```bash
composer install
```

### Step 3: Environment Configuration

1. **Copy your existing environment file:**

::: tip Safer .env Migration
Instead of copying the entire `.env` file, consider adding environment variables one by one. The latest version may introduce new variables or deprecate old ones. At this stage, you mainly need to set up database connection details and essential configuration. Review the sample `.env.example` for new options.
:::

```bash
cp /path/to/old-project/.env .env
```

2. **Update environment variables:**
```bash
# Generate new application key if needed
php artisan key:generate

# Review and update any new configuration options
nano .env
```

::: tip Environment Updates
Check the [CHANGELOG.md](https://github.com/bagisto/bagisto/blob/2.3/CHANGELOG.md) for any new environment variables that need to be added.
:::

### Step 4: Database Migration

::: danger Critical Step
Always backup your database before running migrations!
:::

```bash
# Run database migrations
php artisan migrate

# Run optimize clear
php artisan optimize:clear
```

::: warning Seeder Caution
Avoid using `php artisan db:seed` on existing installations as it may reset your settings and categories. Add default settings manually if needed.
:::

### Step 5: Storage and Assets

```bash
# Create storage link
php artisan storage:link
```

### Step 6: File Migration

Copy your existing files to the new installation:

```bash
# Copy uploaded files
cp -r /path/to/old-project/storage/app/public/* storage/app/public/

# Copy any custom assets
cp -r /path/to/old-project/public/storage/* public/storage/

# Copy custom themes (if any)
cp -r /path/to/old-project/packages/* packages/
```

::: info File Locations
If you've changed default storage paths or have custom file locations, ensure you copy those as well.
:::

### Step 7: Final Optimization

```bash
# Clear all the cache
php artisan optimize:clear
```

## 📚 Version-Specific Guides

### Upgrading from v2.2 to v2.3

For detailed breaking changes and migration steps, refer to:
- [Official UPGRADE.md](https://github.com/bagisto/bagisto/blob/2.3/UPGRADE.md)
- [CHANGELOG.md](https://github.com/bagisto/bagisto/blob/2.3/CHANGELOG.md)

### Upgrading from v2.1 to v2.2

For detailed breaking changes and migration steps, refer to:
- [Official UPGRADE.md](https://github.com/bagisto/bagisto/blob/2.2/UPGRADE.md)
- [CHANGELOG.md](https://github.com/bagisto/bagisto/blob/2.2/CHANGELOG.md)
