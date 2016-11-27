import gql from 'graphql-tag';

export const ThoughtQuery = gql`query($id: ID!) {
    getThought(id:$id) {
        id
        title
        content
        tags
    }
}`;

export const options = ({store}) => {
  const {slug} = store.router.params;
  return {
    variables: {
      id: slug
    }
  }
};