import React, {Component} from 'react';
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
@graphql(PostThoughtMutation, {name: 'postThoughtMutation'})
@graphql(GetUser)
@observer
class NewThoughtPage extends Component {

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

    const {postThoughtMutation, store} = this.props;
    const {newThoughtPage} = store;
    const {form} = newThoughtPage;
    const {fields} = form;
    const {title, content, tags, slug} = fields;

    return (
      <RightSide backgroundColor={colors.thoughtsBackgroundColor}>
        <div>
          <input {...bindField(title)} type="text" placeholder="title"/>
          <br/>
          <input {...bindField(slug)} type="text" placeholder="slug"/>
          <br/>
          <textarea {...bindField(content)} placeholder="content"/>
          <br/>
          <input {...bindField(tags)} type="text" placeholder="tags"/>
          <br/>
          <button onClick={() => newThoughtPage.postThought(postThoughtMutation)}> Post</button>
        </div>
      </RightSide>
    )
  }
}

export default NewThoughtPage;