import React from 'react';
import {Route} from 'mobx-router';

//components
import Home from 'views/Home';
import Thoughts from 'views/Thoughts';
import Thought from 'views/Thought';

const paths = {
  home: new Route({
    component: <Home/>,
    path: '/'
  }),
  thoughts: new Route({
    component: <Thoughts/>,
    path: '/thoughts/:tag?',
    onEnter: (view, params, store) => {
      store.thoughts.fetchThoughts();
    }
  }),
  thought: new Route({
    component: <Thought/>,
    path: '/thought/:slug',
    onEnter: (view, params, store) => {
      store.thoughts.getThought(params.slug)
    }
  })
};

export default paths;
