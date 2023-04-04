import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: 'imageName'
    },
    fields: [
        {
            label: 'Image Name',
            name: 'imageName',
            type: 'text',
        },
        {
            label: 'Alt Text',
            name: 'alt',
            type: 'text',
        }
    ],
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
};

export default Media;