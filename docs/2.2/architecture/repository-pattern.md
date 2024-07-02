# Repository Pattern in Bagisto

[[TOC]]

Bagisto employs the **Repository Pattern** to further enhance the flexibility and maintainability of its codebase.

To add an additional layer of abstraction and promote better code organization, Bagisto incorporates the **Repository Pattern** on top of the **ORM**.

### Benefits of the Repository Pattern

- **Consistency**: Restricts the use of raw queries throughout the application, ensuring a consistent approach to database operations.
- **Maintainability**: Enhances code organization, making it easier to manage and maintain.
- **Flexibility**: Facilitates the implementation of changes without affecting the rest of the codebase.

### Implementation in Bagisto

Bagisto utilizes the [Prettus Repository](https://github.com/prettus/l5-repository) package to facilitate the implementation of the **Repository Pattern**. This choice provides several benefits:

- **Standardization**: Ensures a standardized approach to repository implementation.
- **Extensibility**: Makes it easier to extend and customize the application as needed.
- **Separation of Concerns**: Promotes a clear separation between business logic and data access logic.

By adopting the **Repository Pattern** with the Prettus Repository package, Bagisto enhances the overall architecture of the application, making it more robust and easier to evolve over time.

## Eloquent ORM

[Eloquent](https://laravel.com/docs/11.x/eloquent), the ORM (Object-Relational Mapping) in **Laravel**, provides a higher level of abstraction and simplifies database interactions. With Eloquent, developers can focus on manipulating objects rather than dealing with raw SQL queries, making database operations more convenient and intuitive.