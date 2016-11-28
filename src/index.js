import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import {CONSTANTS} from 'config/constants';

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

//apollo
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo';
const networkInterface = createNetworkInterface({uri: CONSTANTS.GRAPHQL_URL});
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    if (localStorage.getItem(CONSTANTS.TOKEN_KEY)) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem(CONSTANTS.TOKEN_KEY)}`;
    }
    next();
  }
}])
const client = new ApolloClient({networkInterface});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);