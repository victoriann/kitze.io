import React from 'react';
import {observer} from 'mobx-react';

const App = ({store:{router}}) => (
  <div id="router">
    {router.currentView && router.currentView.component}
  </div>
);

export default observer(['store'])(App);