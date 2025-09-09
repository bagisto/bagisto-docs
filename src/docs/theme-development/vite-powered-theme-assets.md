# Vite-Powered Theme Assets

Learn how to set up modern asset compilation for your custom theme package using Vite. This guide builds upon the [Custom Theme Package](./creating-custom-theme-package.md) we created earlier, adding professional asset bundling with CSS, JavaScript, and image optimization.

::: info What You'll Learn
- Setting up Vite for theme package asset compilation
- Configuring Tailwind CSS for your custom theme
- Managing CSS, JavaScript, and static assets
- Integrating compiled assets with your theme package
- Development and production build workflows
:::

## Prerequisites

Before starting this guide, make sure you have completed the [Custom Theme Package](./custom-theme-package.md) tutorial. We'll be a **🧩 [Blade Components →](./blade-components.md)**  
Master the usage of Bagisto's pre-built components with your compiled assets.

**🛠️ [Package Development →](../package-development/)**  
Explore advanced package development techniques and best practices. asset bundling to the `CustomTheme` package we created.

::: tip Why Asset Bundling?
- **Modern Development**: Use the latest CSS and JavaScript features
- **Optimization**: Minified and optimized assets for production
- **Developer Experience**: Hot reload, source maps, and fast compilation
- **Professional Workflow**: Industry-standard build tools and processes
:::

## Understanding Asset Management

Assets in web development refer to files such as stylesheets, scripts, and images that enhance functionality, design, and interactivity. For theme packages, proper asset management ensures:

- **CSS**: Tailwind CSS and custom styles for theme appearance
- **JavaScript**: Interactive components and dynamic behavior  
- **Images**: Optimized graphics, icons, and media content
- **Fonts**: Custom typography and icon fonts

::: info Laravel Vite Integration
Bagisto uses Laravel's Vite integration for modern asset compilation. For detailed information about Laravel's frontend tooling, visit the [Laravel documentation](https://laravel.com/docs/11.x/frontend#bundling-assets).
:::

## Setting Up Your Theme Package Assets

Let's add asset compilation to the `CustomTheme` package we created in the previous tutorial. We'll create a proper asset structure and configure modern build tools.

### Step 1: Create Asset Directory Structure

Add the assets directory to your existing theme package:

```bash
# Navigate to your theme package
cd packages/Webkul/CustomTheme

# Create asset directories
mkdir -p src/Resources/assets/{css,js,images,fonts}
```

Your package structure will now look like this:

```text
packages/Webkul/CustomTheme/
├── src/
│   ├── Providers/
│   │   └── CustomThemeServiceProvider.php
│   └── Resources/
│       ├── views/
│       │   └── home/
│       │       └── index.blade.php
│       └── assets/
│           ├── css/
│           ├── js/
│           ├── images/
│           └── fonts/
```

::: tip What's Next
In the following steps, we'll create the configuration files (`package.json`, `vite.config.js`, etc.) and the actual asset files (`app.css`, `app.js`) to complete our setup.
:::

::: warning Package Context
Make sure you're working within your `CustomTheme` package directory. All commands and file paths in this guide assume you're in `packages/Webkul/CustomTheme/`.
:::

### Step 2: Create Base Asset Files

Create your main CSS and JavaScript files for the theme:

**Create `src/Resources/assets/css/app.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Create `src/Resources/assets/js/app.js`:**

```javascript
import.meta.glob(["../images/**", "../fonts/**"]);
```

## Configure Asset Compilation

Now let's set up the build tools to compile and optimize your theme assets.

### Step 3: Create Configuration Files

Create the following configuration files in your package root (`packages/Webkul/CustomTheme/`):

#### Setting Up Node Dependencies

Create `package.json` with the following content:

::: tip Don't Get Overwhelmed!
Don't worry about understanding every dependency listed below. While we could walk you through installing each package step-by-step, copying this complete configuration file is much easier for beginners. These are standard packages used in most modern Laravel projects with Vite and Tailwind CSS.
:::

```json
{
    "name": "custom-theme",
    "private": true,
    "description": "Custom Theme Package for Bagisto",
    "scripts": {
        "dev": "vite",
        "build": "vite build"
    },
    "devDependencies": {
        "autoprefixer": "^10.4.14",
        "axios": "^1.1.2",
        "laravel-vite-plugin": "^0.7.2",
        "postcss": "^8.4.23",
        "tailwindcss": "^3.3.2",
        "vite": "^4.0.0",
        "vue": "^3.2.47"
    },
    "dependencies": {
        "@vee-validate/i18n": "^4.9.1",
        "@vee-validate/rules": "^4.9.1",
        "mitt": "^3.0.0",
        "vee-validate": "^4.9.1",
        "vue-flatpickr": "^2.3.0"
    }
}
```

::: tip Package Scripts
- `npm run dev`: Starts development server with hot reload
- `npm run build`: Builds optimized assets for production
:::

Now install the dependencies:

```bash
# Make sure you're in your package directory
cd packages/Webkul/CustomTheme

# Install dependencies
npm install
```

#### Setting Up Vite

Create `vite.config.js` configured for your `CustomTheme` package:

::: tip Don't Get Overwhelmed!
This Vite configuration might look complex, but you don't need to understand every detail right now. This setup is based on Bagisto's shop package configuration with paths adjusted for your custom theme package. You can always refer to `packages/Webkul/Shop/vite.config.js` in your Bagisto installation to see how the core shop package handles Vite configuration.
:::

```javascript
import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig(({ mode }) => {
    const envDir = "../../../";

    Object.assign(process.env, loadEnv(mode, envDir));

    return {
        build: {
            emptyOutDir: true,
        },

        envDir,

        server: {
            host: process.env.VITE_HOST || "localhost",
            port: process.env.VITE_PORT || 5173,
            cors: true,
        },

        plugins: [
            laravel({
                hotFile: "../../../public/custom-theme-vite.hot",
                publicDirectory: "../../../public",
                buildDirectory: "themes/custom-theme/build",
                input: [
                    "src/Resources/assets/css/app.css",
                    "src/Resources/assets/js/app.js",
                ],
                refresh: true,
            }),
        ],

        experimental: {
            renderBuiltUrl(filename, { hostId, hostType, type }) {
                if (hostType === "css") {
                    return path.basename(filename);
                }
            },
        },
    };
});
```

#### Setting Up Tailwind CSS

Create `tailwind.config.js` to scan your theme files:

::: tip Comprehensive Configuration!
This Tailwind configuration includes all the settings used in Bagisto's shop package, giving you access to custom breakpoints, colors, and fonts that match Bagisto's design system. The `content` array tells Tailwind where to find your CSS classes, and the custom theme extensions provide Bagisto-specific styling. You can reference `packages/Webkul/Shop/tailwind.config.js` in your Bagisto installation to see the original configuration this is based on.
:::

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/Resources/**/*.blade.php", 
        "./src/Resources/**/*.js",
        "../../../resources/themes/custom-theme/**/*.blade.php" // Include published views
    ],

    theme: {
        container: {
            center: true,

            screens: {
                "2xl": "1440px",
            },

            padding: {
                DEFAULT: "90px",
            },
        },

        screens: {
            sm: "525px",
            md: "768px",
            lg: "1024px",
            xl: "1240px",
            "2xl": "1440px",
            1180: "1180px",
            1060: "1060px",
            991: "991px",
            868: "868px",
        },

        extend: {
            colors: {
                navyBlue: "#060C3B",
                lightOrange: "#F6F2EB",
                darkGreen: '#40994A',
                darkBlue: '#0044F2',
                darkPink: '#F85156',
            },

            fontFamily: {
                poppins: ["Poppins"],
                dmserif: ["DM Serif Display"],
            },
        }
    },

    plugins: [],

    safelist: [
        {
            pattern: /icon-/,
        }
    ]
};
```

#### Setting Up PostCSS

Create `postcss.config.js` for CSS processing:

::: tip Simple CSS Processing!
This PostCSS configuration is straightforward - it just tells PostCSS to use Tailwind CSS and Autoprefixer plugins. PostCSS processes your CSS and Autoprefixer automatically adds vendor prefixes for browser compatibility. You don't need to modify this configuration for basic theme development.
:::

```javascript
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}
```

## Integrate Assets with Your Theme

Now let's update your theme to use the compiled assets and enhance the styling.

### Step 4: Update Theme Configuration

Update your theme configuration in `config/themes.php` to include asset settings:

```php{7-9}
'custom-theme' => [
    'name'        => 'Custom Theme Package',
    'assets_path' => 'public/themes/shop/custom-theme',
    'views_path'  => 'resources/themes/custom-theme/views',

    'vite'        => [
        'hot_file'                 => 'custom-theme-vite.hot',
        'build_directory'          => 'themes/custom-theme/build',
        'package_assets_directory' => 'src/Resources/assets',
    ],
],
```

### Step 5: Configure Bagisto Vite

Add your theme package to `config/bagisto-vite.php`:

```php
'custom-theme' => [
    'hot_file'                 => 'custom-theme-vite.hot',
    'build_directory'          => 'themes/custom-theme/build',
    'package_assets_directory' => 'src/Resources/assets',
],
```

### Step 6: Set Up Development Workflow (Recommended)

For efficient development with hot reload, you should work directly from your package files rather than published views. This ensures your changes are immediately reflected without republishing.

**Option A: Symbolic Link Approach (Linux/Mac - Recommended)**

Create a symbolic link to work directly from your package:

```bash
# Remove the published views directory (backup first if you have changes)
rm -rf resources/themes/custom-theme

# Create symbolic link to your package views (from Bagisto root directory)
ln -s $(pwd)/packages/Webkul/CustomTheme/src/Resources/views resources/themes/custom-theme
```

**Option B: Direct Package Development (All Platforms)**

You can also work directly in your package and republish as needed:

```bash
# After making changes, republish views
php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider" --force
```

::: tip Why Symbolic Links?
- **Hot Reload Works**: Changes in package files are immediately reflected
- **No Republishing**: Skip the republish step during development
- **Faster Workflow**: Edit once, see changes instantly
- **Better for Teams**: All developers work from the same source files
:::

::: warning Platform Considerations
- **Linux/Mac**: Symbolic links work seamlessly
- **Windows**: May require administrator privileges or WSL for symbolic links
- **Alternative**: Use direct package development with occasional republishing
:::

### Step 7: Test Your Asset Compilation

Now let's test that your asset compilation is working properly:

```bash
# Make sure you're in your package directory
cd packages/Webkul/CustomTheme

# Start the development server
npm run dev
```

You should see output similar to:

```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help, q to quit
```

::: tip Testing Your Setup
1. **Keep the dev server running** in your terminal
2. **Visit your Bagisto store** in the browser
3. **Open browser dev tools** (F12) and check the Network tab
4. **Look for your theme assets** being loaded from the Vite dev server
5. **Test hot reload** by making a small change to your `app.css` file
:::

::: warning Hot Reload Troubleshooting
If hot reload isn't working:
- **Check your workflow**: Are you using symbolic links or working from published views?
- **Verify paths**: Ensure Vite is watching the correct directories
- **Restart dev server**: Sometimes a restart resolves connection issues
- **Check browser console**: Look for WebSocket connection errors
:::

::: warning General Troubleshooting
If you encounter other issues:
- Ensure your theme is set as active in Bagisto admin
- Check that your theme configuration in `config/themes.php` is correct
- Verify the Vite configuration paths match your package structure
- Make sure all dependencies were installed successfully with `npm install`
:::

Now that your assets are compiled and configured, you can start building your theme with modern Tailwind CSS classes and JavaScript features. The shop layout will automatically include your compiled assets when your theme is active.

## Working with Vite and Shop Assets

When you first set up your theme package with the minimal assets we created, you'll notice that your store looks broken or unstyled. This is expected! Here's why and how to fix it:

### Understanding Asset Inheritance

Your custom theme package currently has only minimal assets:
- Basic Tailwind CSS directives in `app.css`
- Empty JavaScript file in `app.js`

However, since you're extending the **shop layout** (`<x-shop::layouts>`), you need access to all the shop's base styles, components, and functionality to maintain a working storefront.

### Including Shop Assets in Your Theme

To have full control while building upon Bagisto's foundation, the simplest approach is to copy the complete shop assets folder to your theme:

**Copy Complete Shop Assets:**

```bash
# Copy entire shop assets folder (from Bagisto root directory)
cp -r packages/Webkul/Shop/src/Resources/assets/* packages/Webkul/CustomTheme/src/Resources/assets/

# Copy entire shop views folder
cp -r packages/Webkul/Shop/src/Resources/views/* packages/Webkul/CustomTheme/src/Resources/views/
```

This copies all shop resources including:
- All CSS files and styles
- All JavaScript files and functionality  
- Images, fonts, and other static assets
- Complete Blade template structure
- All shop views and components

**Update your home view to showcase your custom theme:**

Now update `packages/Webkul/CustomTheme/src/Resources/views/home/index.blade.php` with custom content:

```blade
<x-shop::layouts>
    <x-slot:title>
        Custom Theme Home
    </x-slot>

    {{-- Hero Section --}}
    <div class="hero-section bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">
                🎨 Custom Theme Package
            </h1>
            
            <p class="text-xl mb-8 opacity-90">
                Professional theme development with modern asset bundling
            </p>
            
            <button class="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                Explore Features
            </button>
        </div>
    </div>

    {{-- Content Section --}}
    <div class="container mx-auto mt-16 px-4 py-8">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 class="text-xl font-semibold text-blue-600 mb-4">
                    📦 Package Structure
                </h3>
                <p class="text-gray-600">
                    Professional Laravel package organization with proper namespace and autoloading.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 class="text-xl font-semibold text-green-600 mb-4">
                    ⚡ Modern Assets
                </h3>

                <p class="text-gray-600">
                    Vite-powered asset compilation with Tailwind CSS and JavaScript bundling.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 class="text-xl font-semibold text-purple-600 mb-4">
                    🚀 Production Ready
                </h3>

                <p class="text-gray-600">
                    Optimized builds, hot reload development, and professional workflow.
                </p>
            </div>
        </div>
    </div>

    {{-- Feature Showcase --}}
    <div class="bg-gray-50 py-16 mt-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">
                    Complete Shop Foundation
                </h2>

                <p class="text-gray-600 max-w-2xl mx-auto">
                    Your custom theme now includes all shop assets and views, giving you complete control to customize any part of the storefront.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Full Asset Control</h3>

                    <ul class="space-y-2 text-gray-600">
                        <li>✅ Complete CSS foundation with Tailwind</li>
                        <li>✅ All JavaScript functionality included</li>
                        <li>✅ Shop components and layouts</li>
                        <li>✅ Images, fonts, and static assets</li>
                        <li>✅ Hot reload development workflow</li>
                    </ul>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow">
                    <h4 class="font-semibold mb-3">Theme Package Structure</h4>
                    
                    <pre class="text-sm text-gray-600 overflow-x-auto"><code>packages/Webkul/CustomTheme/
├── src/Resources/
│   ├── assets/     (complete shop assets)
│   └── views/      (complete shop views)
├── package.json
├── vite.config.js
└── tailwind.config.js</code></pre>
                </div>
            </div>
        </div>
    </div>
</x-shop::layouts>
```

### Why This Approach Works

1. **Complete Control**: You have the full shop assets in your package to modify directly
2. **No Import Issues**: Avoids complex import paths and potential build problems
3. **Easy Customization**: Modify styles and functionality directly in your files
4. **Simple Configuration**: Keep your Vite config clean and straightforward
5. **Version Control**: All your customizations are clearly visible in your package
6. **No Dependencies**: Your theme doesn't depend on external asset paths

### Benefits of Copying Shop Assets

- **Self-Contained**: Your theme package contains everything it needs
- **Easier Debugging**: All assets are in your package directory
- **Cleaner Builds**: Vite processes only your package assets
- **Better Performance**: No need to resolve external imports during build
- **Flexible Customization**: Start with shop foundation and customize anything
- **Complete Control**: Modify any part of the shop's styling and functionality

::: tip Ready to Go!
After copying the shop assets and views, you can immediately start the development server:

```bash
cd packages/Webkul/CustomTheme
npm run dev
```

Your store will now work perfectly with:
- All shop functionality intact
- Complete view structure for customization
- All assets ready for modification
- Custom home page showcasing your theme

You can customize any part of it directly in your package files.
:::

::: tip Customization Strategy
Now that you have the complete shop foundation, you can:
- **Override specific components** by creating your own Blade templates
- **Customize styles** by modifying the copied CSS files directly
- **Add new functionality** through your JavaScript files
- **Create new components** using Bagisto's design system as a base
:::

::: warning Asset Order Matters
Always load shop assets before your custom assets to ensure:
- Base functionality is available
- Your overrides take precedence
- Components work as expected
:::

## Development Workflow

Here's how to work efficiently with assets in your theme package:

### Asset Development Process

1. **Start Development Server**:
   ```bash
   cd packages/Webkul/CustomTheme
   npm run dev
   ```

2. **Make Changes**: Edit your CSS and JavaScript files in `src/Resources/assets/`

3. **Hot Reload**: Changes appear instantly in your browser (if using dev server)

4. **Build for Production**:
   ```bash
   npm run build
   ```

### Working with Different Asset Types

**CSS Development:**
- Use Tailwind classes in your Blade templates
- Add custom CSS in `src/Resources/assets/css/app.css`
- Tailwind will purge unused styles automatically

**JavaScript Development:**
- Add interactive features in `src/Resources/assets/js/app.js`
- Import additional modules as needed
- Use modern JavaScript features (ES6+)

**Images and Fonts:**
- Place files in `src/Resources/assets/images/` and `src/Resources/assets/fonts/`
- Vite will optimize and copy them to the build directory
- Reference them with relative paths in your CSS

::: tip Development Tips
- Keep the dev server running for instant feedback
- Use browser dev tools to debug compiled CSS
- Check the network tab to verify assets are loading correctly
:::

## Asset Loading and Development

Your assets are now properly configured and will be automatically loaded by Bagisto's shop layout when your theme is active.

::: tip Automatic Asset Loading (Shop Layout Only)
Bagisto automatically includes your theme's compiled CSS and JavaScript when you use the **shop layout** (`<x-shop::layouts>`). This is based on the configuration in `config/themes.php` and `config/bagisto-vite.php`. 

**Note**: This automatic loading only works with Bagisto's built-in shop layout. If you create custom layouts, you'll need to manually include assets using `@bagistoVite`.
:::

### Custom Asset Loading (Required for Custom Layouts)

If you create your own custom layouts instead of using `<x-shop::layouts>`, you **must** manually load your theme assets:

```blade
{{-- In your custom layout file --}}
<!DOCTYPE html>
<html>
<head>
    <title>{{ $title ?? 'Custom Theme' }}</title>
    
    {{-- Manually load theme assets --}}
    @bagistoVite([
        'src/Resources/assets/css/app.css',
        'src/Resources/assets/js/app.js'
    ])
</head>
<body>
    {{ $slot }}
</body>
</html>
```

For specific pages or components that need additional assets:

```blade
@push('styles')
    @bagistoVite([
        'src/Resources/assets/css/app.css',
        'src/Resources/assets/js/app.js'
    ])
@endpush
```

::: warning When Manual Loading is Required
- **Custom Layouts**: Required when not using `<x-shop::layouts>`
- **Specific Pages**: For pages that need additional or different assets
- **Component Libraries**: When building reusable components with their own assets
- **Admin Themes**: Admin layouts don't automatically load shop theme assets

**Parameters**:
- The first argument is an array of asset paths relative to `src/Resources/assets/`
- Most themes using `<x-shop::layouts>` rely on automatic loading
:::

## Production Deployment

When deploying your theme package:

1. **Build Production Assets**:
   ```bash
   cd packages/Webkul/CustomTheme
   npm run build
   ```

2. **Commit Built Assets**: Include the `public/themes/custom-theme/build/` directory in your repository

3. **Server Setup**: Ensure your web server serves static files from the build directory

4. **Cache Busting**: Vite automatically handles asset versioning for cache invalidation

## What's Next?

Congratulations! You now have a professional theme package with modern asset compilation. Here are your next steps:

**📄 [Understanding Layouts →](./understanding-layouts.md)**  
Learn to create complex layouts and component systems for your theme.

**🧩 [Blade Components →](./blade-components.md)**  
Master the usage of Bagisto's pre-built components with your compiled assets.

**�️ [Package Development →](../package-development/)**  
Explore advanced package development techniques and best practices.