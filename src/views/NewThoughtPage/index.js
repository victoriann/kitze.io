import React from 'react';
import {observer, inject} from 'mobx-react';
import colors from 'config/colors';
import {bindField} from 'utils/input-utils';

//data
import {graphql} from 'react-apollo';
import {PostThoughtMutation} from './graphql-data';
import {GetUser} from 'gql/graphql-shared';

//styled-components
import {RightSide} from './styles';

@inject('store')
@observer
@graphql(PostThoughtMutation, {name: 'postThought'})
@graphql(GetUser)
class NewThoughtPage extends React.Component {

  state = {
    title: '',
    content: '',
    tags: '',
    slug: ''
  }

  componentWillReceiveProps = nextProps => {
    this.props.store.auth.returnUnloggedHome(nextProps);
  }

  render() {

    const {postThought} = this.props;
    const {title, content, tags, slug} = this.state;

    return (
      <RightSide backgroundColor={colors.thoughtsBackgroundColor}>
        <div>
          <input {...bindField(this, 'title')} type="text" placeholder="title"/>
          <br/>
          <input {...bindField(this, 'slug')} type="text" placeholder="slug"/>
          <br/>
          <textarea {...bindField(this, 'content')} placeholder="content"/>
          <br/>
          <input {...bindField(this, 'tags')} type="text" placeholder="tags"/>
          <br/>
          <button onClick={() => postThought({variables: {title, content, tags, slug}})}> Post</button>
        </div>
      </RightSide>
    )
  }
}

export default NewThoughtPage;