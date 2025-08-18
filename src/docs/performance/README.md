# Performance

Bagisto is designed to be fast, scalable, and efficient, ensuring a smooth e-commerce experience even under heavy traffic. This guide covers essential performance optimizations, caching strategies, database tuning, indexing, full-page caching (FPC), Laravel Octane, and load balancing techniques to enhance scalability.

In the realm of online stores, [web vitals](https://web.dev/vitals/) have become increasingly crucial. Bagisto prioritizes good [LCP](https://web.dev/lcp/) and [CLS](https://web.dev/cls/) to ensure an optimal user experience.

Additionally, Bagisto has seamlessly integrated [ElasticSearch](https://bagisto.com/en/elasticsearch-for-bagisto/) to further enhance search speed and efficiency.

## Key Performance Features

### Caching Mechanisms
- Implements Full Page Caching (FPC) to reduce server processing time and accelerate page loads.
- Page and route caching improve response times.

### Optimized Codebase
- Follows best coding practices with a modular architecture for faster execution.
- Uses Laravel Octane to boost performance by running the application with high-performance servers like RoadRunner and Swoole.

### Database Performance
- Uses proper indexing and optimized queries to enhance database speed.
- Supports read/write database replication for high availability.

### Lazy Loading
- Implements lazy loading for images and assets to enhance page load speed.

### Indexing for Enhanced Performance
- Implements indexing strategies using Elasticsearch to speed up product searches and filtering.
- Improves product listing performance with efficient indexing mechanisms.
- Supports asynchronous indexing to prevent performance bottlenecks.

### Queue Processing
- Uses Laravel Queues to handle background tasks efficiently (e.g., emails, order processing).

## Load Balancing for Scalability

To ensure high availability and scalability, Bagisto can be deployed with a Load Balancer to distribute traffic efficiently across multiple instances.

### Optimize Database Queries
- Monitor slow queries and implement indexing.

### Regular Updates
- Keep Bagisto and all dependencies up to date.

### Monitor Performance Metrics
- Use AWS CloudWatch, New Relic, or other monitoring tools to track performance bottlenecks.

By following these best practices and leveraging Bagisto's built-in performance features, you can ensure a fast, scalable, and reliable e-commerce platform.
