import { buildConfig } from 'payload/config';
import path from 'path';
import Posts from './collections/Posts';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Posts,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});