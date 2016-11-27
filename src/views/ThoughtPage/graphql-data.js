import gql from 'graphql-tag';

export const ThoughtQuery = gql`query($slug: String) {
    viewer{
        allThoughts(where:{slug: {eq: $slug}}){
            edges{
                node{
                    slug
                    id
                    title
                    content
                    tags
                    createdAt
                }
            }
        }
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