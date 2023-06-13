# Repository Pattern

[Eloquent](https://laravel.com/docs/10.x/eloquent), the [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) in **Laravel**, provide a higher level of abstraction and make working with databases more convenient, as you can focus on manipulating objects rather than dealing with raw SQL queries.

To further enhance flexibility and maintainability, Bagisto incorporates the **Repository pattern** as an additional layer on top of the **ORM**.

By implementing the **Repository pattern**, **Bagisto** restricts the use of raw queries throughout the application. This ensures consistency and promotes better code organization.

Bagisto utilizes the [Prettus Repository](https://github.com/prettus/l5-repository) package to facilitate the implementation of the **Repository pattern**. This choice enhances the flexibility of the application, making it easier to maintain and extend.