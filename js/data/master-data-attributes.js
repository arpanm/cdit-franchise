// Master Data Attributes Definition

const MASTER_DATA_ATTRIBUTES = {
    brands: [
        { name: 'id', type: 'string', description: 'Unique identifier for the brand' },
        { name: 'name', type: 'string', description: 'Brand name' },
        { name: 'description', type: 'string', description: 'Brand description' },
        { name: 'logo', type: 'string', description: 'Brand logo URL' },
        { name: 'status', type: 'string', description: 'Brand status (active/inactive)' },
        { name: 'website', type: 'string', description: 'Brand website URL' },
        { name: 'countryOfOrigin', type: 'string', description: 'Country where the brand originates' },
        { name: 'createdAt', type: 'datetime', description: 'Brand creation timestamp' },
        { name: 'updatedAt', type: 'datetime', description: 'Last update timestamp' }
    ],
    categories: [
        { name: 'id', type: 'string', description: 'Unique identifier for the category' },
        { name: 'name', type: 'string', description: 'Category name' },
        { name: 'description', type: 'string', description: 'Category description' },
        { name: 'parentId', type: 'string', description: 'Parent category ID' },
        { name: 'level', type: 'number', description: 'Category hierarchy level' },
        { name: 'status', type: 'string', description: 'Category status' },
        { name: 'image', type: 'string', description: 'Category image URL' },
        { name: 'createdAt', type: 'datetime', description: 'Category creation timestamp' },
        { name: 'updatedAt', type: 'datetime', description: 'Last update timestamp' }
    ],
    products: [
        { name: 'id', type: 'string', description: 'Unique identifier for the product' },
        { name: 'name', type: 'string', description: 'Product name' },
        { name: 'description', type: 'string', description: 'Product description' },
        { name: 'sku', type: 'string', description: 'Stock keeping unit' },
        { name: 'brandId', type: 'string', description: 'Associated brand ID' },
        { name: 'categoryId', type: 'string', description: 'Associated category ID' },
        { name: 'price', type: 'number', description: 'Product price' },
        { name: 'status', type: 'string', description: 'Product status' },
        { name: 'specifications', type: 'object', description: 'Product specifications' },
        { name: 'images', type: 'array', description: 'Product image URLs' },
        { name: 'createdAt', type: 'datetime', description: 'Product creation timestamp' },
        { name: 'updatedAt', type: 'datetime', description: 'Last update timestamp' }
    ],
    warranty: [
        { name: 'id', type: 'string', description: 'Unique identifier for the warranty' },
        { name: 'productId', type: 'string', description: 'Associated product ID' },
        { name: 'type', type: 'string', description: 'Warranty type' },
        { name: 'duration', type: 'number', description: 'Warranty duration in months' },
        { name: 'terms', type: 'string', description: 'Warranty terms and conditions' },
        { name: 'coverage', type: 'object', description: 'Warranty coverage details' },
        { name: 'status', type: 'string', description: 'Warranty status' },
        { name: 'startDate', type: 'datetime', description: 'Warranty start date' },
        { name: 'endDate', type: 'datetime', description: 'Warranty end date' },
        { name: 'createdAt', type: 'datetime', description: 'Warranty creation timestamp' },
        { name: 'updatedAt', type: 'datetime', description: 'Last update timestamp' }
    ]
};