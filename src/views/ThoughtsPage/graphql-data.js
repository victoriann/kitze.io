import gql from 'graphql-tag';

export const ThoughtsQuery = gql`query {
    viewer{
        allThoughts {
            edges {
                node {
                    id
                    title
                    createdAt
                    tags
                    slug
                }
            }
        }
    }
}`;