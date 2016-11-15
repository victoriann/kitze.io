import React from 'react';
import {Route} from 'mobx-router';

//components
import Home from 'views/Home';

const paths = {
  home: new Route({
    component: <Home/>,
    path: '/'
  }),
  thoughts: new Route({
    component: <div> Thoughts </div>,
    path: '/thoughts/:tag?'
  }),
  thought: new Route({
    component: <div> Thought </div>,
    path: '/thought/:slug'
  })
};

export default paths;
