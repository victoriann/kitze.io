import gql from 'graphql-tag';

export const ThoughtQuery = gql`query($slug: String) {
    allThoughts(filter:{slug:$slug}){
        slug
        id
        title
        content
        tags
        createdAt
    }
}`;

export const options = ({store}) => {
  const {slug} = store.router.params;
  return {
    variables: {
      slug
    }
  }
};