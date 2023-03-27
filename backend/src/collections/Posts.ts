import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'Title',
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
    },
    {
      name: 'Text',
      type: 'richText',
    },
  ],
}

export default Posts;