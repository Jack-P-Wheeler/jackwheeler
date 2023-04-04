import { Block } from 'payload/types';

const TextPicture: Block = {
    slug: 'TextPicture',
    imageURL: 'http://localhost:3000/media/hero.png',
    imageAltText: 'Hero Block Thumbnail',
    fields: [
        {
            label: 'Headline',
            name: 'headline',
            type: 'text',
            required: true,
        },
        {
            label: 'Image',
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            label: 'Text',
            name: 'text',
            type: 'richText',
        },
    ]
};

export default TextPicture