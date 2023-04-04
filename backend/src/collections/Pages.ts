import { CollectionConfig } from 'payload/types';
import Hero from '../blocks/Hero';
import DirectorsDisplay from '../blocks/DirectorsDisplay';
import TextPicture from '../blocks/TextPicture';

const Pages: CollectionConfig = {
    slug: 'pages',
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: 'pageTitle',
    },
    fields: [
        {
            label: 'Page Title',
            name: 'pageTitle',
            type: 'text',
            required: true,
        },
        {
            label: 'Featured Image',
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            label: 'Blocks',
            name: 'blocks',
            type: 'blocks',
            maxRows: 20,
            blocks: [ // required
                Hero,
                DirectorsDisplay,
                TextPicture,
            ]
        }
    ],
}

export default Pages;