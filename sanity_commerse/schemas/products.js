
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true
                },
            }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Varient',
            name: 'varient',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: doc => `${doc.name}-${doc._id}`,
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'briefDetail',
            title: 'Brief Detail',
            type: 'string',
        },
        {
            name: 'hugeDetails',
            title: 'Huge Detail',
            type: 'array',
            of: [{ type: 'block' }]
        }, {
            name: 'catalog',
            title: 'Catalog',
            type: 'reference',
            to: [{ type: 'catalog' }],
            options: { disableNew: true }
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'sizes' }],
                options: { disableNew: true }
            }]
        },

    ]
}