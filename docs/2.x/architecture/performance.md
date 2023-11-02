# Performance

[[TOC]]

In the realm of online stores, [web vitals](https://web.dev/vitals/) have become increasingly crucial. **Bagisto** prioritizes good [LCP](https://web.dev/lcp/) and [CLS](https://web.dev/cls/) to ensure optimal user experience.

Additionally, **Bagisto** has seamlessly integrated [ElasticSearch](https://bagisto.com/en/elasticsearch-for-bagisto/) to further enhance user experience.

## ElasticSearch 

As Elastic is designed to handle large amounts of data and provide fast and scalable search capabilities, **Bagisto** leverages its capabilities to index all products, thereby significantly enhancing the search functionality.

### Indexing

When dealing with large volumes of data and retrieving complex information like variants and prices, optimizing queries becomes a challenge.

To enhance **Bagisto's** performance, the following indexers play a crucial role:

#### Inventory 

This indexer focuses on indexing the inventory of the website for various product types such as configurable, grouped, and bundled products.

#### Price 

The price indexer manages the prices of the aforementioned product types.

## Laravel Octain 

[Laravel Octane](https://laravel.com/docs/10.x/octane) is a performance-boosting package designed to enhance the speed, efficiency, and scalability of Laravel applications, including Bagisto.

- Drives remarkable improvements in page load times, ensuring a seamless and responsive shopping experience.

- Provides the scalability required to accommodate the growth of e-commerce businesses.

- Forms the foundation for optimizing Bagisto's performance and meeting the demands of modern e-commerce.

## FPC(Full Page Cache) 

In Bagisto we have implemented FPC(Full Page Cache) for follwing purposes.

- Faster page loading times.
- Reduce server load.
- Better SEO ranking due to faster loading speed.
- Enhance user experience.
