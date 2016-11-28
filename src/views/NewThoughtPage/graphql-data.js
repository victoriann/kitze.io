import gql from 'graphql-tag';

export const PostThoughtMutation = gql`
    mutation createThought($content: String!, $title: String!, $slug: String!, $tags: String!){
        createThought(content:$content, title: $title, tags: $tags, slug: $slug){
            id
            content
            title
            slug
        }
    }
`;