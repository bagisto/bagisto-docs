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

### Install Laravel Octane

Navigate to your Bagisto directory and install Octane:

```bash
# Navigate to your Bagisto project
cd /path/to/your/bagisto

# Install Laravel Octane
composer require laravel/octane

# Install Octane with Swoole server
php artisan octane:install --server=swoole
```

## Configuration

### Environment Configuration

Add Octane settings to your `.env` file:

```properties
# Laravel Octane Configuration
OCTANE_SERVER=swoole
OCTANE_HOST=0.0.0.0
OCTANE_PORT=8000
OCTANE_WORKERS=4
OCTANE_TASK_WORKERS=6
OCTANE_MAX_REQUESTS=1000
```

### Basic Octane Configuration

The installation command creates `config/octane.php`. Key settings for Bagisto:

```php
// config/octane.php
return [
    'server' => env('OCTANE_SERVER', 'swoole'),
    
    'servers' => [
        'swoole' => [
            'host' => env('OCTANE_HOST', '0.0.0.0'),
            'port' => env('OCTANE_PORT', 8000),
            'workers' => env('OCTANE_WORKERS', 4),
            'task_workers' => env('OCTANE_TASK_WORKERS', 6),
            'max_requests' => env('OCTANE_MAX_REQUESTS', 1000),
        ],
    ],
    
    // Warm services on worker start
    'warm' => [
        ...Octane::defaultServicesToWarm(),
    ],
];
```

## Running Octane

### Development Mode

Start Octane with auto-reload for development:

```bash
php artisan octane:start --watch
```

Access your Bagisto application at: `http://localhost:8000`

### Production Mode

Start Octane for production without file watching:

```bash
php artisan octane:start --workers=8 --task-workers=6
```

### Server Management

::: code-group

```bash [Start Server]
# Start with default settings
php artisan octane:start

# Start with custom workers
php artisan octane:start --workers=4 --task-workers=6
```

```bash [Stop/Restart]
# Stop the server
php artisan octane:stop

# Restart the server
php artisan octane:restart

# Reload workers (without downtime)
php artisan octane:reload
```

:::

## Performance Settings

### Worker Configuration

Optimize workers based on your server specs:

| Server Configuration | Workers | Task Workers |
|---------------------|---------|--------------|
| **2 CPU cores, 4GB RAM** | 4 | 4 |
| **4 CPU cores, 8GB RAM** | 8 | 6 |
| **8 CPU cores, 16GB RAM** | 16 | 12 |

### Environment Optimization

```properties
# Optimized settings for production
OCTANE_WORKERS=8
OCTANE_TASK_WORKERS=6
OCTANE_MAX_REQUESTS=2000
OCTANE_HOST=0.0.0.0
OCTANE_PORT=8000
```

## Monitoring

### Check Server Status

```bash
# View server status
php artisan octane:status

# Monitor memory usage
ps aux | grep octane
```

### Performance Monitoring

Expected performance improvements:

| Metric | Before Octane | With Octane |
|--------|---------------|-------------|
| **Requests/second** | 50-100 | 500-1000+ |
| **Response time** | 200-500ms | 50-100ms |
| **Memory efficiency** | Variable | Stable |

## Common Issues

### Troubleshooting

| Problem | Solution |
|---------|----------|
| **Port already in use** | Change `OCTANE_PORT` or stop conflicting services |
| **Memory leaks** | Reduce `OCTANE_MAX_REQUESTS` to restart workers more frequently |
| **Slow startup** | Ensure database connections are properly configured |

### Debug Commands

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
4. Run: `php artisan octane:start --watch`
5. Access: Visit `http://localhost:8000`
:::

::: warning Production Notes
- Use a process manager (like Supervisor) to keep Octane running
- Configure a reverse proxy (Nginx) for production deployments
- Monitor memory usage and restart workers periodically
- Test thoroughly before deploying to production
:::