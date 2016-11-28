import gql from 'graphql-tag';

export const GetUser = gql`
    query {
        user {
            id
        }
    }
`;