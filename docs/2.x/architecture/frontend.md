# Vue and Tailwind

[Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/) handles the complete UI of **Bagisto**.

[Vite](https://vitejs.dev/) is a tool that offers a fast and efficient development environment for building modern web applications. It replaces [Laravel Mix](https://laravel.com/docs/10.x/mix), which was used for defining [webpack](https://webpack.js.org/) and building steps in your [Laravel](https://laravel.com) application using various CSS and JavaScript [pre-processors](https://en.wikipedia.org/wiki/Preprocessor).

**Bagisto** is using [Vue.js](https://vuejs.org/) and [Vite](https://vitejs.dev/), vite compiles all of CSS and JavaScript assets that are placed into public directory.

In **vite.config.js** file, just define your [Vue.js](https://vuejs.org/) and path of build directory, [Vite](https://vitejs.dev/) will be responsible to compile all the assets on defined location.

In **tailwind.config.js** file, just define your blade file path along with .js file directory, [Tailwind CSS](https://tailwindcss.com/) will be responsible to compile all the css defined on the location.

# Blade

**Bagisto** utilizes the Blade template engine, which comes integrated with **Laravel**. It allows flexibility by permitting the use of both Blade components and plain PHP code within templates. This versatility empowers developers to craft dynamic and efficient solutions. For further insights into Bagisto's directory structure and package configuration, refer to the [documentation](https://devdocs.bagisto.com/2.x/packages/views.html#directory-structure).