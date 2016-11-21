import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';
import {Link, Title, DateTime} from './styles';

const ThoughtItem = ({store, thought}) => {
  const {router} = store;

  return (
    <Link
      key={thought.id}
      onClick={() => router.goTo(views.thought, {slug: thought.slug}, store)}
    >
      <Title>
        {thought.title}
      </Title>

      <DateTime>
        {thought.createdAt}
      </DateTime>
    </Link>
  )
}

export default observer(['store'])(ThoughtItem);