import AppStore from 'stores/app-store.mobx';
import ThoughtsStore from 'stores/thoughts-store.mobx';
import AuthStore from 'stores/auth-store.mobx';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  auth: new AuthStore,
  thoughts: new ThoughtsStore(),
  router: new RouterStore(),
};

export default store;