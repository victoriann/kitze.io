import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

//styled-components
import {Wrapper} from './styles';

//external
import {Link} from 'mobx-router';

const Thought = ({store}) => {

  const {thoughts} = store;
  const {loading, currentThought} = thoughts;

  if (loading) {
    return <div> Loading ... </div>
  }

  return (
    <Wrapper>
      <Link view={views.thoughts} store={store}>
        <b> Read all thoughts</b>
      </Link>
      <h1>{currentThought.title}</h1>
      <div dangerouslySetInnerHTML={{__html: currentThought.content}}/>
    </Wrapper>
  )
}

export default observer(['store'])(Thought);