# Vue and Sass

[Vue.js](https://vuejs.org/) handles the complete UI of **Bagisto**

[Laravel Mix](https://laravel.com/docs/10.x/mix) is a package that provides a fluent API for defining [webpack](https://webpack.js.org/) and it build steps for your [Laravel](https://laravel.com) application using several common CSS and JavaScript [pre-processors](https://en.wikipedia.org/wiki/Preprocessor).

**Bagisto** is using [Vue.js](https://vuejs.org/) and [Sass](https://sass-lang.com/), webpack compiles all of CSS and JavaScript assets that are placed into public directory.

In **webpack.mix.js** file, just define your [Vue.js](https://vuejs.org/) and [Sass](https://sass-lang.com/) assets, [webpack](https://webpack.js.org/) will be responsible to compile all the assets on defined location.

# Blade

**Bagisto** uses blade template engine that is included with **Laravel**. It does not restrict you from using plain PHP code in your templates. [This documentation](http://localhost:8080/1.5.x/packages/views.html#directory-structure) provides an explanation of directory structure and package configuration for implementations.