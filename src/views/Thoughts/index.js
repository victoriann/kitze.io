import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

//styled-components
import {UnorderedList, ListItem} from 'styles/shared/styled-components';
import {Wrapper} from './styles';

//external
import {Link} from 'mobx-router';

const Thoughts = ({store}) => {

  const {thoughts} = store;
  const {loading, thoughtsList} = thoughts;

  if (loading) {
    return <div> Loading ... </div>
  }

  return (
    <Wrapper>
      <UnorderedList>
        {thoughtsList.map(thought => (
          <ListItem key={thought.id}>
            <Link view={views.thought} params={{slug: thought.slug}} store={store}>
              {thought.title}
            </Link>
          </ListItem>
        ))
        }
      </UnorderedList>
    </Wrapper>
  )
}

export default observer(['store'])(Thoughts);