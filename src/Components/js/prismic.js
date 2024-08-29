


// ./js/prismic.js
import * as prismic from '@prismicio/client';

const repositoryName = 'MyPor';
export const client = prismic.createClient(repositoryName, {
  accessToken: 'your-access-token', // If you have a private repository
});
