import gql from 'graphql-tag';

export const ThoughtsQuery = gql`query {
    allThoughts(filter: {published:true}) {
        id
        title
        createdAt
        tags
        slug
    }
}`;