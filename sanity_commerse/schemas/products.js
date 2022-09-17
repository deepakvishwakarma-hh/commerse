import { string } from "prop-types";

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'brand',
            title: 'Brand',
            type: 'string',
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
        {
            name: 'varients',
            title: 'Varients',
            type: 'array',
            of: [
                {
                    name: 'varient',
                    title: 'Varient',
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string"
                        },
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
                        }
                    ]
                }
            ]
        }

    ]
}