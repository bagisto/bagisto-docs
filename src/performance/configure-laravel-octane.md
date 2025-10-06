# Configure Laravel Octane

[Laravel Octane](https://laravel.com/docs/11.x/octane) is a performance-boosting package designed to enhance the speed, efficiency, and scalability of Laravel applications, including Bagisto.

::: info What You'll Learn
- Install Laravel Octane in your Bagisto application
- Configure Octane for optimal performance
- Run and manage the Octane server
:::

## Benefits for Bagisto

- **Performance**: Drives remarkable improvements in page load times, ensuring a seamless and responsive shopping experience
- **Scalability**: Provides the scalability required to accommodate the growth of e-commerce businesses
- **Foundation**: Forms the foundation for optimizing Bagisto's performance and meeting the demands of modern e-commerce

## Prerequisites

::: warning Requirements
- Swoole PHP extension must be installed on your system
- PHP 8.2 or higher
- Existing Bagisto installation
:::

Verify Swoole is installed:

```bash
php --ri swoole
```

## Installation

Laravel Octane installation for Bagisto involves installing the Octane package via Composer and then configuring it to use Swoole as the application server. This process will enhance your Bagisto application's performance significantly.

### Install Laravel Octane

Navigate to your Bagisto directory and install Octane:

```bash
# Navigate to your Bagisto project
cd /path/to/your/bagisto

# Install Laravel Octane
composer require laravel/octane

# Install Octane with Swoole
php artisan octane:install
```

::: tip Developer Note
After running `php artisan octane:install`, the terminal will prompt you to select a server. Choose **Swoole** from the available options:
- Swoole
- RoadRunner
- FrankenPHP

We're configuring Octane with Swoole throughout this guide, so make sure to select Swoole when prompted to ensure consistency with the configuration examples provided.
:::

## Environment Configuration

After completing the installation, you'll notice that `OCTANE_SERVER=swoole` has been automatically added to the end of your `.env` file. If for some reason it's not there, you can add it manually.

```properties
OCTANE_SERVER=swoole
```

## Running Octane

Start Octane for production without file watching:

```bash
php artisan octane:start
```

## Common Issues

While Laravel Octane with Swoole is generally stable, you might encounter some common issues during setup or operation. Here are the most frequent problems and their solutions to help you troubleshoot your Bagisto Octane installation.

### Troubleshooting

| Problem | Solution |
|---------|----------|
| **Port already in use** | Change `OCTANE_PORT` or stop conflicting services |
| **Memory leaks** | Reduce `OCTANE_MAX_REQUESTS` to restart workers more frequently |
| **Slow startup** | Ensure database connections are properly configured |

### Debug Commands

Use these diagnostic commands to verify your Octane installation, check system compatibility, and monitor running processes. These commands are essential for troubleshooting and ensuring everything is working correctly.

```bash
# Test if Swoole is working
php -m | grep swoole

# Check Octane installation
php artisan octane:install --server=swoole

# View worker processes
ps aux | grep "artisan octane"
```

::: tip Quick Start
1. Install: `composer require laravel/octane`
2. Setup: `php artisan octane:install --server=swoole`
3. Configure: Update `.env` with Octane settings
4. Run: `php artisan octane:start`
5. Access: Visit `http://localhost:8000`
:::

::: warning Production Notes
- Use a process manager (like Supervisor) to keep Octane running
- Configure a reverse proxy (Nginx) for production deployments
- Monitor memory usage and restart workers periodically
- Test thoroughly before deploying to production
:::