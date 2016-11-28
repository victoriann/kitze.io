import gql from 'graphql-tag';

export const ThoughtsQuery = gql`query {
    allThoughts {
        id
        title
        createdAt
        tags
        slug
    }
}`;