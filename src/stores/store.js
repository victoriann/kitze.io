import AppStore from 'stores/global/app-store.mobx';
import ThoughtsStore from 'stores/views/thoughts-store.mobx';
import NewThoughtPageStore from 'stores/views/new-thought-page-store.mobx';
import AuthStore from 'stores/global/auth-store.mobx';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  auth: new AuthStore,
  thoughts: new ThoughtsStore(),
  newThoughtPage: new NewThoughtPageStore(),
  router: new RouterStore(),
};

export default store;