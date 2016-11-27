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

//apollo
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'https://v2.api.scaphold.io/graphql/kitzeio'}),
  dataIdFromObject: o => o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);