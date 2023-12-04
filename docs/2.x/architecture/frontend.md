# Vue and Tailwind

[Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/) handles the complete UI of **Bagisto**.

[Vite](https://vitejs.dev/) is a tool that offers a fast and efficient development environment for building modern web applications. It replaces [Laravel Mix](https://laravel.com/docs/10.x/mix), which was used for defining [webpack](https://webpack.js.org/) and building steps in your [Laravel](https://laravel.com) application using various CSS and JavaScript [pre-processors](https://en.wikipedia.org/wiki/Preprocessor).

**Bagisto** uses Vue.js and Vite. Vite compiles all CSS and JavaScript assets that are located within the public directory.

In **vite.config.js** file, just define your Vue.js and path of build directory, Vite will be responsible to compile all the assets on defined location.

In **tailwind.config.js** file, just define your blade file path along with .js file directory, Tailwind CSS will be responsible to compile all the css defined on the location.

# Blade

**Bagisto** uses blade template engine that is included with **Laravel**. It does not restrict you from using plain PHP code in your templates. This [documentation](https://devdocs.bagisto.com/2.x/packages/views.html#directory-structure) provides an explanation of directory structure and package configuration for implementations.