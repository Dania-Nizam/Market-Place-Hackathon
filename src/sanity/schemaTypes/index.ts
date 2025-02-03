import { type SchemaTypeDefinition } from 'sanity'
import car from './car'

import rent from './rent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,rent],
}
