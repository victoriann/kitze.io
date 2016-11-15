import React from 'react';
import {observer} from 'mobx-react';

const App = ({store:{router}}) => (
  <div>
    {router.currentView && router.currentView.component}
  </div>
);

export default observer(['store'])(App);