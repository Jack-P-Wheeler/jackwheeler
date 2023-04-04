import { Block } from 'payload/types';

const Hero: Block = {
    slug: 'Hero',
    imageURL: 'http://localhost:3000/media/hero.png',
    imageAltText: 'Hero Block Thumbnail',
    fields: [
        {
            label: 'Hero Headline',
            name: 'heroHeadline',
            type: 'text',
            required: true,
        },
        {
            label: 'Hero Background Image',
            name: 'heroBackgroundImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            label: 'Hero Text',
            name: 'heroText',
            type: 'text',
        },
        {
            label: 'Button Text',
            name: 'buttonText',
            type: 'text'
        },
        {
            label: 'Button Link',
            name: 'buttonLink',
            type: 'text',
            // validate: (val, args) => {
            //     try {
            //         if (val == ""){
            //             return true
            //         }
            //         new URL(val);
            //         return true
            //     } catch (_) {
            //         return "Please input a valid URL.";
            //     }
            // },
        }
    ]
};

export default Hero