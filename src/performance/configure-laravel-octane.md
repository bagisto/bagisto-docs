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

Before installing Laravel Octane, ensure your system meets the basic requirements. The specific requirements may vary depending on which application server you choose (Swoole, FrankenPHP, or RoadRunner).

::: warning Requirements
- PHP 8.2
- Existing Bagisto installation
:::

### Server-Specific Requirements

Choose one of the following server options:

#### For Swoole Server

- Swoole PHP extension must be installed on your system

Verify Swoole is installed:

```bash
php --ri swoole
```

#### For FrankenPHP Server  

- No additional PHP extensions required
- FrankenPHP binary will be automatically downloaded during installation
- Supports automatic HTTPS, HTTP/2, and HTTP/3 out of the box

Verify FrankenPHP (after installation):

```bash
./frankenphp version
```

#### For RoadRunner Server

- No additional PHP extensions required
- RoadRunner binary will be automatically downloaded during installation
- Built with Go for high performance and scalability
- Supports HTTP, gRPC, and background job processing

Verify RoadRunner (after installation):

```bash
./rr version
```

## Installation

Laravel Octane installation for Bagisto involves installing the Octane package via Composer and then configuring it to use Swoole, FrankenPHP, or RoadRunner as the application server. All three options will enhance your Bagisto application's performance significantly.

### Install Laravel Octane

Navigate to your Bagisto directory and install Octane:

```bash
# Navigate to your Bagisto project
cd /path/to/your/bagisto

# Install Laravel Octane
composer require laravel/octane

# Install Octane (will prompt for server selection)
php artisan octane:install
```

### Choose Your Server

::: tip Server Selection
After running `php artisan octane:install`, the terminal will prompt you to select a server from these options:
- **Swoole** - High-performance async PHP server with advanced features like concurrent tasks
- **FrankenPHP** - Modern PHP server with native HTTP/2, HTTP/3, and automatic HTTPS
- **RoadRunner** - Go-based application server with excellent performance and plugin ecosystem

All three servers are excellent choices for Bagisto. This guide covers all options.
:::

### Direct Installation Options

If you prefer to skip the interactive prompt:

```bash
# Install with Swoole
php artisan octane:install --server=swoole

# Install with FrankenPHP  
php artisan octane:install --server=frankenphp

# Install with RoadRunner
php artisan octane:install --server=roadrunner
```

### RoadRunner Additional Setup

For RoadRunner, you may also need to install additional packages:

```bash
# Install RoadRunner CLI and HTTP packages (optional)
composer require spiral/roadrunner-http spiral/roadrunner-cli
```

## Environment Configuration

After completing the installation, the appropriate server configuration will be automatically added to your `.env` file based on your selection.

### For Swoole Server

```properties
OCTANE_SERVER=swoole
```

### For FrankenPHP Server

```properties
OCTANE_SERVER=frankenphp
```

### For RoadRunner Server

```properties
OCTANE_SERVER=roadrunner
```

## Running Octane

### Basic Usage

Start Octane server (uses configured server from .env):

```bash
php artisan octane:start
```

## Common Issues

While Laravel Octane with Swoole, FrankenPHP, and RoadRunner is generally stable, you might encounter some common issues during setup or operation. Here are the most frequent problems and their solutions to help you troubleshoot your Bagisto Octane installation.

### General Troubleshooting

| Problem | Solution |
|---------|----------|
| **Port already in use** | Change the port or stop conflicting services |
| **Memory leaks** | Reduce the max request by specifying in the octane command |
| **Slow startup** | Ensure database connections are properly configured |
| **Worker crashes** | Check PHP error logs and reduce worker count if needed |
| **Swoole extension not found** | Install via `pecl install swoole` or use package manager |
| **FrankenPHP binary not found** | Re-run `php artisan octane:install --server=frankenphp` |
| **RoadRunner binary not found** | Re-run `php artisan octane:install --server=roadrunner` |

::: tip Quick Start Guide
1. **Install Laravel Octane:**
   ```bash
   composer require laravel/octane
   ```

2. **Choose and setup your server:**
   ```bash
   # For Swoole
   php artisan octane:install --server=swoole
   
   # For FrankenPHP
   php artisan octane:install --server=frankenphp
   
   # For RoadRunner
   php artisan octane:install --server=roadrunner
   ```

3. **Configure your `.env` file:**
   - For Swoole: `OCTANE_SERVER=swoole`
   - For FrankenPHP: `OCTANE_SERVER=frankenphp`
   - For RoadRunner: `OCTANE_SERVER=roadrunner`

4. **Start the server:**
   ```bash
   php artisan octane:start
   ```

5. **Access your application:**
   - Visit `http://localhost:8000`
:::
