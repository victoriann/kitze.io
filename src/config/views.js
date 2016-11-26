import React from 'react';
import {Route} from 'mobx-router';

//components
import Home from 'views/Home';
import ThoughtsPage from 'views/ThoughtsPage';
import ThoughtPage from 'views/ThoughtPage';

const paths = {
  home: new Route({
    id: 'home',
    component: <Home/>,
    path: '/'
  }),
  thoughts: new Route({
    id: 'thoughts',
    component: <ThoughtsPage/>,
    path: '/thoughts/:tag?',
    onEnter: (view, params, store) => {
      store.thoughts.fetchThoughts();
    }
  }),
  thought: new Route({
    id: 'thought',
    component: <ThoughtPage/>,
    path: '/thought/:slug',
    onEnter: (view, params, store) => {
      store.thoughts.getThought(params.slug)
    }
  })
};

export default paths;
