# Assets

[[TOC]]

## Directory Structure

- To organize our assets, we need to create the following folder structure in the **`Resources`** folder:
  - Create a folder named **`assets`**.
  - Inside the **`assets`** folder, create the following folders: **`css`**, **`js`**, and **`images`**.
  - In the **css** folder, add the files **_app.css_**.
  - In the **js** folder, add the file **_app.js_**.

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
                    
```

1. Similarly Copy and paste below code to the `**app.js**`` file.

    ```javascript
    /**
     * This will track all the images and fonts for publishing.
    */
    import.meta.glob(["../images/**", "../fonts/**"]);
    ```

## Compiling Assets

To compile the assets, perform the following steps:

1. Create a **`package.json,`** **`vite.config.js,`** **`postcss.config.js,`** and **`tailwind.config.js`** file inside the root of your package i.e. (**`packages/Webkul/Blog`**).

2. Copy the following code into the **`package.json`** file:

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

3. Copy the following code into the **`vite.config.js`** file:

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
4. Copy the following code into the **`tailwind.config.js`** file:

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

5. Copy the following code into the **`postcss.config.js `** file:

    ```javascript
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    ```

6. Run **`npm install`** in the root of your package (**`packages/Webkul/Blog`**) to install all the dependencies.

Now, your **`css`** and **`js`** files are ready to use. You can write all your CSS and JS code here. 

::: tip
To watch your changes in assets, run **`npm run dev`**, and When you're done making changes, run **`npm run build`** to compile all your changes and move them into the build directory.
:::

## Load Assets From Package

- To load the assets from your package, add the following code to the **`config/bagisto-vite.php`** file:

    ```php
    'blog' => [
        'hot_file'                 => 'blog-vite.hot',
        'build_directory'          => 'themes/blog/build',
        'package_assets_directory' => 'src/Resources/assets',
    ],
    ```

- After that you can add the following code to your blade file this will load assets from your package.

  ```php
  @push('styles')
      @bagistoVite([
        'src/Resources/assets/css/app.css',
        'src/Resources/assets/js/app.js'
      ], 'blog')
  @endpush
  ```