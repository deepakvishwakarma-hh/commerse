import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
//custom schmas
import products from './products'
import catalog from './catalog'
import sizes from './sizes'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    products, catalog, sizes
  ]),
})
