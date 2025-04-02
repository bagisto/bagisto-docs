# Bundling Assets

[[TOC]]

## Introduction 

Assets in web development refer to files such as stylesheets, scripts, and images that are utilized to enhance the functionality, design, and interactivity of a web application or website. These files are essential for providing styling, behavior, and media content to the user interface.

- **CSS**: Cascading Style Sheets (CSS) define the presentation and layout of HTML elements, ensuring consistent styling across pages.
- **JavaScript**: JavaScript (JS) adds interactivity and dynamic behavior to web pages, enabling features like form validation, animations, and AJAX requests.
- **Images**: Images enhance visual content, including logos, illustrations, and photographs, making web pages more engaging and informative.

To learn in detail about Bundling Asset, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/frontend#bundling-assets).

## Directory Structure

To maintain organization and manage these assets effectively, developers typically structure them within dedicated folders in the project's `Resources` directory. For instance:

- `/Resources/assets/css`: Contains CSS files like `app.css` for styling the application.
- `/Resources/assets/js`: Holds JavaScript files such as `app.js` for client-side scripting.
- `/Resources/assets/images`: Stores image files used throughout the application.
- `/Resources/assets/fonts`: Stores fonts used throughout the application.

Here's the updated directory structure:

```
└── packages
    └── Webkul
        └── Blog
            └── src
                ├── ...
                └── Resources
                    ├── ...
                    └── assets
                        ├── css
                        │   └── app.css
                        ├── js
                        │   └── app.js
                        └── images
                        └── fonts
                    
```

The following JavaScript code snippet is used to track and publish all images and fonts within specified directories:

```javascript
/**
 * This will track all the images and fonts for publishing.
*/
import.meta.glob(["../images/**", "../fonts/**"]);
```

#### Explanation

- This code utilizes the `import.meta.glob()` function, which is a feature in JavaScript for importing multiple modules using glob patterns.

- `"../images/**"`: Matches all files and directories within the images directory and its subdirectories.

- `"../fonts/**"`: Matches all files and directories within the fonts directory and its subdirectories.

## Configure Compiling Assets

To compile the assets, perform the following steps:

### Create Configuration Files

First, create the following configuration files in the root directory of your package, specifically inside `packages/Webkul/Blog`:

- `package.json`
- `vite.config.js`
- `postcss.config.js`
- `tailwind.config.js`

### Set Up package.json

Copy and paste the following code into your `package.json` file:

```json
{
    "private": true,
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
#### Explanation

The `package.json` file includes the following:

-  Ensures the package is private and not published to a registry.

- **Scripts** 
    - `dev` Runs the Vite development server.

    - `build` Builds the project for production using Vite.

- **DevDependencies:** These are packages required during the development phase, including:
    - `autoprefixer` Adds vendor prefixes to CSS rules.

    - `axios` A promise-based HTTP client.

    - `laravel-vite-plugin` Integrates Vite with Laravel.

    - `postcss` A tool for transforming CSS with JavaScript plugins.

    - `tailwindcss` A utility-first CSS framework.

    - `vite` A frontend build tool.

    - `vue` The progressive JavaScript framework.

- **Dependencies:** These are essential packages required for the project to function, including:
    - `@vee-validate/i18n` Internationalization for VeeValidate.

    - `@vee-validate/rules` Validation rules for VeeValidate.

    - `mitt` A tiny event emitter.

    - `vee-validate` Form validation for Vue.js.

    - `vue-flatpickr` A Vue component for Flatpickr date picker.

### Set Up vite.config.js

Copy and paste the following code into your `vite.config.js` file:

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
                hotFile: "../../../public/blog-vite.hot",
                publicDirectory: "../../../public",
                buildDirectory: "themes/blog/build",
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

#### Explanation

The `vite.config.js` file configures Vite for your project. Here are the key sections:

- `defineConfig` A function that defines the configuration for Vite.

- `loadEnv` Loads environment variables from a specific directory.

- `emptyOutDir` Ensures the output directory is cleaned before building.

- `envDir` Specifies the directory for environment variables.

- `host` The host address for the development server.

- `port` The port for the development server.

- `plugins` An array of plugins used by Vite. The laravel-vite-plugin integrates Vite with Laravel.

- `experimental` Experimental features, such as custom handling of built URLs for CSS.

### Set Up tailwind.config.js    

Copy and paste the following code into your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/Resources/**/*.blade.php", "./src/Resources/**/*.js"],

    theme: {
        extend: {}
    },

    plugins: [],
};
```

#### Explanation

The `tailwind.config.js` file configures Tailwind CSS for your project:

- `content` Specifies the files Tailwind should scan for class names to generate styles. In this case, it includes all Blade and JavaScript files in the src/Resources directory.

- `theme` Allows customization of the default theme. The extend object is used to add or override default styles.
- `plugins` An array where you can add Tailwind CSS plugins. Currently, it is empty.

By following these steps and setting up the tailwind.config.js file as shown, you’ll ensure that Tailwind CSS is properly integrated and configured in your project.

### Set Up postcss.config.js

Copy and paste the following code into your `postcss.config.js` file:

```javascript
module.exports = {
    plugins: {
    tailwindcss: {},
    autoprefixer: {},
    },
}
```

#### Explanation

The `postcss.config.js` file configures PostCSS with the following plugins:

- `tailwindcss` Integrates Tailwind CSS.

- `autoprefixer` Adds vendor prefixes to CSS rules to ensure cross-browser compatibility.

###  Install Dependencies

Run `npm install` in the root of your package (`packages/Webkul/Blog`) to install all the dependencies.

Now, your `css` and `js` files are ready to use. You can write all your CSS and JS code here.

::: tip
To watch your changes in assets, run **`npm run dev`**, and When you're done making changes, run **`npm run build`** to compile all your changes and move them into the build directory.
:::

## Load Assets From Package

To load assets from your package, follow these steps:

### Update config/bagisto-vite.php

Add the following code to the `config/bagisto-vite.php` file:

```php
'blog' => [
    'hot_file'                 => 'blog-vite.hot',
    'build_directory'          => 'themes/blog/build',
    'package_assets_directory' => 'src/Resources/assets',
],
```

#### Explanation

The configuration array specifies how to load assets for the "blog" package:

- `hot_file` Specifies the name of the Vite hot module replacement (HMR) file.
- `build_directory` Indicates where the built assets will be placed.
- `package_assets_directory` Points to the directory containing the package's assets.

### Load Assets in Blade File

Add the following code to your Blade file to load assets from your package:

  ```php
  @push('styles')
      @bagistoVite([
        'src/Resources/assets/css/app.css',
        'src/Resources/assets/js/app.js'
      ], 'blog')
  @endpush
  ```

  #### Explanation

  - The first argument is an array of asset paths relative to the `package_assets_directory`.

  - The second argument is the key for the configuration array, which in this case is `'blog'`.