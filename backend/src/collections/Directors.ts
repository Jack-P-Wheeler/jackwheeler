import { CollectionConfig } from 'payload/types';

const Directors: CollectionConfig = {
    slug: 'directors',
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
        },
        {
            label: 'Title',
            name: 'title',
            type: 'text',
        },
        {
            label: 'Director Photo',
            name: 'directorPhoto',
            type: 'upload',
            relationTo: 'media',
        },
    ],
}

export default Directors;