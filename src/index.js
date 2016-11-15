import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';

//mobx
import {useStrict} from 'mobx';
import store from 'stores/store';
import {Provider} from 'mobx-react';
useStrict(true);

//router
import {startRouter} from 'mobx-router';
import views from 'config/views';
startRouter(views, store);

//components
import App from 'views/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);