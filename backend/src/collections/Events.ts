import { CollectionConfig } from 'payload/types';

const Events: CollectionConfig = {
    slug: 'events',
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: 'eventName',
    },
    fields: [
        {
            label: 'Event Name',
            name: 'eventName',
            type: 'text',
        },
        {
            label: 'Event Date',
            name: 'eventDate',
            type: 'date'
        },
        {
            label: 'Event Description',
            name: 'eventDescription',
            type: 'richText',
        },
    ],
}

export default Events;